// function formatNumber(num) {
//     return num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : "0";
// }

const formatNumber = (num = 0) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default formatNumber