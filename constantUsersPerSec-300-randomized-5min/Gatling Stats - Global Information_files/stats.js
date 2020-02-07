var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "89845",
        "ok": "89813",
        "ko": "32"
    },
    "minResponseTime": {
        "total": "149",
        "ok": "149",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "18642",
        "ok": "18642",
        "ko": "10007"
    },
    "meanResponseTime": {
        "total": "227",
        "ok": "224",
        "ko": "10002"
    },
    "standardDeviation": {
        "total": "501",
        "ok": "466",
        "ko": "1"
    },
    "percentiles1": {
        "total": "167",
        "ok": "167",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "178",
        "ok": "178",
        "ko": "10002"
    },
    "percentiles3": {
        "total": "232",
        "ok": "231",
        "ko": "10003"
    },
    "percentiles4": {
        "total": "1446",
        "ok": "1407",
        "ko": "10006"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 88123,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 512,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1178,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 32,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "298.488",
        "ok": "298.382",
        "ko": "0.106"
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
        "total": "89845",
        "ok": "89813",
        "ko": "32"
    },
    "minResponseTime": {
        "total": "149",
        "ok": "149",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "18642",
        "ok": "18642",
        "ko": "10007"
    },
    "meanResponseTime": {
        "total": "227",
        "ok": "224",
        "ko": "10002"
    },
    "standardDeviation": {
        "total": "501",
        "ok": "466",
        "ko": "1"
    },
    "percentiles1": {
        "total": "167",
        "ok": "167",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "178",
        "ok": "178",
        "ko": "10002"
    },
    "percentiles3": {
        "total": "232",
        "ok": "232",
        "ko": "10003"
    },
    "percentiles4": {
        "total": "1435",
        "ok": "1408",
        "ko": "10006"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 88123,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 512,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1178,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 32,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "298.488",
        "ok": "298.382",
        "ko": "0.106"
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
