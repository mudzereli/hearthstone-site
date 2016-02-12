/* create elements for for sticky footer */
    document.createElement('header');
    document.createElement('footer');
    document.createElement('section');
    document.createElement('article');
    document.createElement('aside');
    document.createElement('nav');
    
function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}