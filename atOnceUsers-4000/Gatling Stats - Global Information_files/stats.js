var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4000",
        "ok": "3538",
        "ko": "462"
    },
    "minResponseTime": {
        "total": "237",
        "ok": "237",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "20892",
        "ok": "20892",
        "ko": "10400"
    },
    "meanResponseTime": {
        "total": "6432",
        "ok": "5965",
        "ko": "10010"
    },
    "standardDeviation": {
        "total": "3525",
        "ok": "3487",
        "ko": "47"
    },
    "percentiles1": {
        "total": "7438",
        "ok": "6645",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "8281",
        "ok": "7686",
        "ko": "10002"
    },
    "percentiles3": {
        "total": "11122",
        "ok": "11190",
        "ko": "10023"
    },
    "percentiles4": {
        "total": "18740",
        "ok": "18752",
        "ko": "10286"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 24,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 118,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3396,
    "percentage": 85
},
    "group4": {
    "name": "failed",
    "count": 462,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "181.818",
        "ok": "160.818",
        "ko": "21"
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
        "total": "4000",
        "ok": "3538",
        "ko": "462"
    },
    "minResponseTime": {
        "total": "237",
        "ok": "237",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "20892",
        "ok": "20892",
        "ko": "10400"
    },
    "meanResponseTime": {
        "total": "6432",
        "ok": "5965",
        "ko": "10010"
    },
    "standardDeviation": {
        "total": "3525",
        "ok": "3487",
        "ko": "47"
    },
    "percentiles1": {
        "total": "7438",
        "ok": "6645",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "8281",
        "ok": "7686",
        "ko": "10002"
    },
    "percentiles3": {
        "total": "11122",
        "ok": "11190",
        "ko": "10023"
    },
    "percentiles4": {
        "total": "18740",
        "ok": "18752",
        "ko": "10286"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 24,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 118,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3396,
    "percentage": 85
},
    "group4": {
    "name": "failed",
    "count": 462,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "181.818",
        "ok": "160.818",
        "ko": "21"
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
