var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "89887",
        "ok": "89871",
        "ko": "16"
    },
    "minResponseTime": {
        "total": "150",
        "ok": "150",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "10510",
        "ok": "10510",
        "ko": "10003"
    },
    "meanResponseTime": {
        "total": "274",
        "ok": "272",
        "ko": "10001"
    },
    "standardDeviation": {
        "total": "401",
        "ok": "379",
        "ko": "1"
    },
    "percentiles1": {
        "total": "185",
        "ok": "185",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "265",
        "ok": "265",
        "ko": "10002"
    },
    "percentiles3": {
        "total": "485",
        "ok": "484",
        "ko": "10003"
    },
    "percentiles4": {
        "total": "1459",
        "ok": "1452",
        "ko": "10003"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 87598,
    "percentage": 97
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 499,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1774,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 16,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "298.628",
        "ok": "298.575",
        "ko": "0.053"
    }
},
contents: {
"req_request-0-684d2": {
        type: "REQUEST",
        name: "request_0",
path: "request_0",
pathFormatted: "req_request-0-684d2",
stats: {
    "name": "request_0",
    "numberOfRequests": {
        "total": "89887",
        "ok": "89871",
        "ko": "16"
    },
    "minResponseTime": {
        "total": "150",
        "ok": "150",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "10510",
        "ok": "10510",
        "ko": "10003"
    },
    "meanResponseTime": {
        "total": "274",
        "ok": "272",
        "ko": "10001"
    },
    "standardDeviation": {
        "total": "401",
        "ok": "379",
        "ko": "1"
    },
    "percentiles1": {
        "total": "185",
        "ok": "185",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "265",
        "ok": "265",
        "ko": "10002"
    },
    "percentiles3": {
        "total": "485",
        "ok": "484",
        "ko": "10003"
    },
    "percentiles4": {
        "total": "1459",
        "ok": "1453",
        "ko": "10003"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 87598,
    "percentage": 97
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 499,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1774,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 16,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "298.628",
        "ok": "298.575",
        "ko": "0.053"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
