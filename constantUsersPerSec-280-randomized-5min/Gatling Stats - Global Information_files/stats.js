var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "84126",
        "ok": "84117",
        "ko": "9"
    },
    "minResponseTime": {
        "total": "149",
        "ok": "149",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "19814",
        "ok": "19814",
        "ko": "10002"
    },
    "meanResponseTime": {
        "total": "223",
        "ok": "222",
        "ko": "10001"
    },
    "standardDeviation": {
        "total": "399",
        "ok": "386",
        "ko": "1"
    },
    "percentiles1": {
        "total": "168",
        "ok": "168",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "184",
        "ok": "184",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "346",
        "ok": "346",
        "ko": "10002"
    },
    "percentiles4": {
        "total": "1412",
        "ok": "1410",
        "ko": "10002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 82523,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 535,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1059,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 9,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "279.488",
        "ok": "279.458",
        "ko": "0.03"
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
        "total": "84126",
        "ok": "84117",
        "ko": "9"
    },
    "minResponseTime": {
        "total": "149",
        "ok": "149",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "19814",
        "ok": "19814",
        "ko": "10002"
    },
    "meanResponseTime": {
        "total": "223",
        "ok": "222",
        "ko": "10001"
    },
    "standardDeviation": {
        "total": "399",
        "ok": "386",
        "ko": "1"
    },
    "percentiles1": {
        "total": "168",
        "ok": "168",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "184",
        "ok": "184",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "347",
        "ok": "346",
        "ko": "10002"
    },
    "percentiles4": {
        "total": "1412",
        "ok": "1410",
        "ko": "10002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 82523,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 535,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1059,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 9,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "279.488",
        "ok": "279.458",
        "ko": "0.03"
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
