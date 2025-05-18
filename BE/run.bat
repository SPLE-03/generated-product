echo SELECT 'CREATE DATABASE healthcare_product_allinfo' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'healthcare_product_allinfo') \gexec | psql "postgresql://postgres:postgres@localhost"
for %%G in (sql/*.sql) do psql -a -f sql/%%G "postgresql://postgres:postgres@localhost/healthcare_product_allinfo"

java -cp healthcare.product.allinfo --module-path healthcare.product.allinfo -m healthcare.product.allinfo