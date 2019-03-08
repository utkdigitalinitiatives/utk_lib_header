echo 'Shipping React Build to...';
echo '~/Sites/dev/www/wp-content/themes/ut-libraries/resources/assets/react/header';

rsync -av --delete build/static/media ~/Sites/dev/www/wp-content/themes/ut-libraries/resources/assets/react/header
rsync -av --delete build/static/js/header.js ~/Sites/dev/www/wp-content/themes/ut-libraries/resources/assets/react/header
rsync -av --delete build/static/css/header.css ~/Sites/dev/www/wp-content/themes/ut-libraries/resources/assets/react/header

cd ~/Sites/dev/www/wp-content/themes/ut-libraries/;
yarn build;
cd ~/Sites/react/utk_lib_header;

echo 'Shipped Complete';