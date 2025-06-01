#!/bin/bash

cleanup() {
    echo "Exiting script..."
    pkill -P $$
    exit 1
}

trap cleanup SIGINT

read -p "Enter the path to the frontend directory: " frontend_dir

echo "SELECT 'CREATE DATABASE healthcare_product_bersamasehat' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'healthcare_product_bersamasehat') \gexec" | psql "postgresql://postgres:postgres@localhost"
for file in sql/*.sql; do
    psql -a -f "$file" "postgresql://postgres:postgres@localhost/healthcare_product_bersamasehat"
done

java -cp healthcare.product.bersamasehat --module-path healthcare.product.bersamasehat -m healthcare.product.bersamasehat &

cd $frontend_dir && {
    npm install && {
        npm run json:server &
        npm run start &
    }
}

wait