echo SELECT 'CREATE DATABASE healthcare_product_jagadiri' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'healthcare_product_jagadiri') \gexec | psql "postgresql://postgres:postgres@localhost"
for %%G in (sql/*.sql) do psql -a -f sql/%%G "postgresql://postgres:postgres@localhost/healthcare_product_jagadiri"

java -cp healthcare.product.jagadiri --module-path healthcare.product.jagadiri -m healthcare.product.jagadiri