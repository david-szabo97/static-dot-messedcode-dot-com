uncss public/index.html > temp.css
cleancss temp.css -o public/css/style.min.css
rm temp.css
uglifyjs public/js/script.js -o public/js/script.min.js