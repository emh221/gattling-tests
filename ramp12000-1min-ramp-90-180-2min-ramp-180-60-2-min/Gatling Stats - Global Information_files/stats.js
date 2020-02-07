var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "42600",
        "ok": "42600",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "149",
        "ok": "149",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1874",
        "ok": "1874",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "167",
        "ok": "167",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "79",
        "ok": "79",
        "ko": "-"
    },
    "percentiles1": {
        "total": "153",
        "ok": "153",
        "ko": "-"
    },
    "percentiles2": {
        "total": "157",
        "ok": "157",
        "ko": "-"
    },
    "percentiles3": {
        "total": "184",
        "ok": "184",
        "ko": "-"
    },
    "percentiles4": {
        "total": "686",
        "ok": "686",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 42447,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 131,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 22,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "141.528",
        "ok": "141.528",
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
        "total": "42600",
        "ok": "42600",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "149",
        "ok": "149",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1874",
        "ok": "1874",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "167",
        "ok": "167",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "79",
        "ok": "79",
        "ko": "-"
    },
    "percentiles1": {
        "total": "153",
        "ok": "153",
        "ko": "-"
    },
    "percentiles2": {
        "total": "157",
        "ok": "157",
        "ko": "-"
    },
    "percentiles3": {
        "total": "184",
        "ok": "184",
        "ko": "-"
    },
    "percentiles4": {
        "total": "686",
        "ok": "686",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 42447,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 131,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 22,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "141.528",
        "ok": "141.528",
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
