echo 'Shipping React Build to...';
echo '~/Sites/exist/polk-correspondence-app/resources/ut-tei/src/vendor/utk_lib_header';

rsync -av --delete build/static/media ~/Sites/exist/polk-correspondence-app/resources/ut-tei/src/vendor/utk_lib_header
rsync -av --delete build/static/js/header.js ~/Sites/exist/polk-correspondence-app/resources/ut-tei/src/vendor/utk_lib_header
rsync -av --delete build/static/css/header.css ~/Sites/exist/polk-correspondence-app/resources/ut-tei/src/vendor/utk_lib_header

cd ~/Sites/exist/polk-correspondence-app/;
# yarn;
# yarn build;
cd ~/Sites/react/utk_lib_header;

echo 'Shipped Complete';
