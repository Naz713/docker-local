FROM php:fpm-stretch

RUN apt-get update && apt-get install -y

RUN apt-get update && apt-get install -y --no-install-recommends \
		git \
		zlib1g-dev \
		libxml2-dev \
		libzip-dev \
	&& docker-php-ext-install \
		zip \
		intl \
		mysqli \
		pdo pdo_mysql

RUN curl -sS https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer

RUN curl -sS https://get.symfony.com/cli/installer | bash && mv /root/.symfony/bin/symfony /usr/local/bin/symfony

# RUN composer create-project symfony/website-skeleton carriers

COPY ./carriers/ /var/www/carriers

# RUN composer install

WORKDIR /var/www/carriers
