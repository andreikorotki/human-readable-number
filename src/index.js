module.exports = function toReadable (num) {
        const from_0_to_19 = [
            "zero",
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
            "ten",
            "eleven",
            "twelve",
            "thirteen",
            "fourteen",
            "fifteen",
            "sixteen",
            "seventeen",
            "eighteen",
            "nineteen",
        ];
        const from_10_to_90 = [
            "",
            "ten",
            "twenty",
            "thirty",
            "forty",
            "fifty",
            "sixty",
            "seventy",
            "eighty",
            "ninety",
        ];
    
        if (num >= 0 && num < 20) {
            return from_0_to_19[num];
        } else if (num >= 20 && num < 100) {
            let tens = Math.trunc(num / 10);
            let rest = num % 10;
            if (rest === 0) {
               return from_10_to_90[tens];
            }
            else {
                return (from_10_to_90[tens] + " " + toReadable(num - tens * 10)).trim();
            };
        } else if (num >= 100 && num < 1000) {
            let hundreds = Math.trunc(num / 100);
            let rest = num % 100;
            if (rest === 0) {
                return from_0_to_19[hundreds] + " hundred";
             }
             else {
                return (
                    from_0_to_19[hundreds] +
                    " hundred " +
                    toReadable(num - hundreds * 100)
                ).trim();
             }

        } else if (num >= 1000 && num < 20000) {
            let thousands = Math.trunc(num / 1000);
            let rest = num % 1000;
            if (rest === 0) {
                return from_0_to_19[thousands] + " thousand";
             }
             else {
                return (
                    from_0_to_19[thousands] +
                    " thousand " +
                    toReadable(num - thousands * 1000)
                ).trim();
            }
        }
};
