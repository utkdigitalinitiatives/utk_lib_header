echo 'Shipping React Build to...';
echo '~/Sites/dev/www/wp-content/themes/utk_lib_wp_theme/resources/assets/react/header';

rsync -av --delete build/static/media ~/Sites/dev/www/wp-content/themes/utk_lib_wp_theme/resources/assets/react/header
rsync -av --delete build/static/js/header.js ~/Sites/dev/www/wp-content/themes/utk_lib_wp_theme/resources/assets/react/header
rsync -av --delete build/static/css/header.css ~/Sites/dev/www/wp-content/themes/utk_lib_wp_theme/resources/assets/react/header

cd ~/Sites/dev/www/wp-content/themes/utk_lib_wp_theme/;
yarn build;
cd ~/Sites/react/utk_lib_header;

echo 'Shipped Complete';