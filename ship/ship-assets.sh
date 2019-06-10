echo 'Shipping React Build to...';
echo '~/Sites/dev/assets/header';

#rsync -av --delete dist/ ~/Sites/dev/assets/header

echo 'Shipped Complete';
