function assignGrade(score) {
    if (score > 90) {
        return "an A";
    } else if (score > 80) {
        return "a B";
    } else if (score > 70) {
        return "a C";
    } else if (score > 65) {
        return "a D";
    } else {
        return "an E";
    }
}

for (i = 60; i <= 100; i++) {
    console.log("For scoring", i, "points, you get", assignGrade(i));
}
