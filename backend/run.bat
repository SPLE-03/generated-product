echo SELECT 'CREATE DATABASE healthcare_product_bersamasehat' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'healthcare_product_bersamasehat') \gexec | psql "postgresql://postgres:postgres@localhost"
for %%G in (sql/*.sql) do psql -a -f sql/%%G "postgresql://postgres:postgres@localhost/healthcare_product_bersamasehat"

java -cp healthcare.product.bersamasehat --module-path healthcare.product.bersamasehat -m healthcare.product.bersamasehat