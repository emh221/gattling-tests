var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10618",
        "ok": "9980",
        "ko": "638"
    },
    "minResponseTime": {
        "total": "149",
        "ok": "149",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "16869",
        "ok": "16869",
        "ko": "10213"
    },
    "meanResponseTime": {
        "total": "1645",
        "ok": "1106",
        "ko": "10070"
    },
    "standardDeviation": {
        "total": "3184",
        "ok": "2441",
        "ko": "73"
    },
    "percentiles1": {
        "total": "154",
        "ok": "154",
        "ko": "10037"
    },
    "percentiles2": {
        "total": "190",
        "ok": "161",
        "ko": "10155"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "8109",
        "ko": "10198"
    },
    "percentiles4": {
        "total": "10180",
        "ok": "9491",
        "ko": "10211"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8275,
    "percentage": 78
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 71,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1634,
    "percentage": 15
},
    "group4": {
    "name": "failed",
    "count": 638,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "87.752",
        "ok": "82.479",
        "ko": "5.273"
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
        "total": "10618",
        "ok": "9980",
        "ko": "638"
    },
    "minResponseTime": {
        "total": "149",
        "ok": "149",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "16869",
        "ok": "16869",
        "ko": "10213"
    },
    "meanResponseTime": {
        "total": "1645",
        "ok": "1106",
        "ko": "10070"
    },
    "standardDeviation": {
        "total": "3184",
        "ok": "2441",
        "ko": "73"
    },
    "percentiles1": {
        "total": "154",
        "ok": "154",
        "ko": "10037"
    },
    "percentiles2": {
        "total": "187",
        "ok": "161",
        "ko": "10155"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "8109",
        "ko": "10198"
    },
    "percentiles4": {
        "total": "10180",
        "ok": "9491",
        "ko": "10211"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8275,
    "percentage": 78
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 71,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1634,
    "percentage": 15
},
    "group4": {
    "name": "failed",
    "count": 638,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "87.752",
        "ok": "82.479",
        "ko": "5.273"
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
