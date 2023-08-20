<template>
    <section style="padding:30px">
        <div style="margin-bottom: 16px">
            <div>航班資料:</div>
            <div v-html="flightBoxMsg" style="
                        width: 330px;
                        height: 300px;
                        border: 1px solid black;
                        padding: 10px;
                        margin-bottom: 10px;
                        overflow: auto;
                    ">
            </div>
            <div style="
                        display: flex;
                        justify-content: space-between;
                        width: 300px;
                    ">
                <span>{{ resStatusMsg }}</span>
                <button @click="sendFlightRequest">取得</button>
            </div>
        </div>
        <div v-if="show_myDestination">
            我的目的地:
            <select @change="navToQuery" ref="select">
                <option value="" disabled selected>請選擇</option>
                <option v-for="item in destIdList" :value="item">{{ item }}</option>
            </select>
            <div>最快航班：</div>
            <div>{{ closestFlightMsg }}</div>
        </div>
    </section>
</template>

<script>
export default {
    watch: {
        '$route.query'(newVal) {
            this.$refs.select.value = newVal.id
            this.findClosestFlight(newVal.id)
        }
    },
    data() {
        return {
            show_myDestination: false,
            flightData: null,
            resStatusMsg: '',
            flightBoxMsg: '',
            destIdList: [],
            closestFlightMsg: ''
        }
    },
    methods: {
        sendXhrRequest() {
            if (this.$store.state.flightCache) {
                return Promise.resolve(this.$store.state.flightCache)
            } else {
                return new Promise((resolve, reject) => {
                    const xhrReqObj = new XMLHttpRequest();
                    xhrReqObj.open(
                        "GET",
                        "https://tdx.transportdata.tw/api/basic/v2/Air/FIDS/Airport/Departure"
                    );
                    xhrReqObj.send();
                    xhrReqObj.addEventListener("load", function () {
                        if (xhrReqObj.status >= 200 && xhrReqObj.status < 400) {
                            resolve(JSON.parse(xhrReqObj.responseText));
                        } else {
                            reject(
                                `錯誤狀態${xhrReqObj.status}，錯誤信息${xhrReqObj.statusText}`
                            );
                        }
                    });
                });
            }
        },
        sendFlightRequest() {
            this.show_myDestination = false
            this.sendXhrRequest()
                .then((res) => {
                    this.flightData = res;
                    this.$store.commit('saveFlightCache', res)
                    this.resStatusMsg = "啊哈哈<(*￣▽￣*)/";
                    this.flightBoxMsg = this.getResMsg(res);
                    this.destIdList = this.getDestIdList(res);
                    this.show_myDestination = true
                })
                .catch((err) => {
                    this.resStatusMsg = "失敗了的說 0_0";
                    this.flightBoxMsg = err;
                });

        },
        getResMsg(res) {
            return res.reduce((accumulator, cur) => {
                return (
                    accumulator +
                    `航班${cur.AirlineID}${cur.FlightNumber}到${cur.ArrivalAirportID
                    }，起飛時間是${this.formatDate(cur.ScheduleDepartureTime)}<br/>`
                );
            }, "");
        },
        getDestIdList(flightList) {
            const result = [];
            flightList.forEach((cur) => {
                if (!result.includes(cur.ArrivalAirportID)) {
                    result.push(cur.ArrivalAirportID);
                }
            });
            return result.sort();
        },
        formatDate(dateSource) {
            const dateObj = new Date(dateSource);
            const hour = dateObj.getHours().toString().padStart(2, "0");
            const minute = dateObj.getMinutes().toString().padStart(2, "0");

            return `${hour}:${minute}`;
        },
        navToQuery(e) {
            this.$router.push({ name: this.$route.name, query: { id: e.target.value } })
        },
        findClosestFlight(id) {
            const filterList = this.flightData.filter((cur) => {
                return (
                    cur.ArrivalAirportID === id &&
                    new Date(cur.ScheduleDepartureTime).getTime() >
                    new Date().getTime() + 1 * 60 * 60 * 1000
                );
            });
            if (filterList.length === 0) {
                this.closestFlightMsg = `很遺憾，台灣已經沒有1小時後起飛去往${id}的航班了，去重新安排旅程吧`;
            } else {
                const target = filterList.sort((a, b) => {
                    return (
                        new Date(a.ScheduleDepartureTime) -
                        new Date(b.ScheduleDepartureTime)
                    );
                })[0];
                this.closestFlightMsg = `很幸運，台灣還有${filterList.length
                    }架航班會在1小時後起飛去往${id}，最快的航班是${target.AirlineID
                    }${target.FlightNumber}，起飛時間是${this.formatDate(
                        target.ScheduleDepartureTime
                    )}`;
            }
        }
    }
}
</script>

