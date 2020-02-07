var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "35400",
        "ok": "35400",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "149",
        "ok": "149",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9446",
        "ok": "9446",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "234",
        "ok": "234",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "454",
        "ok": "454",
        "ko": "-"
    },
    "percentiles1": {
        "total": "157",
        "ok": "157",
        "ko": "-"
    },
    "percentiles2": {
        "total": "168",
        "ok": "168",
        "ko": "-"
    },
    "percentiles3": {
        "total": "530",
        "ok": "531",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1783",
        "ok": "1782",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 34423,
    "percentage": 97
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 367,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 610,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "146.888",
        "ok": "146.888",
        "ko": "-"
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
        "total": "35400",
        "ok": "35400",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "149",
        "ok": "149",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9446",
        "ok": "9446",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "234",
        "ok": "234",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "454",
        "ok": "454",
        "ko": "-"
    },
    "percentiles1": {
        "total": "157",
        "ok": "157",
        "ko": "-"
    },
    "percentiles2": {
        "total": "168",
        "ok": "168",
        "ko": "-"
    },
    "percentiles3": {
        "total": "530",
        "ok": "530",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1783",
        "ok": "1781",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 34423,
    "percentage": 97
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 367,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 610,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "146.888",
        "ok": "146.888",
        "ko": "-"
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
