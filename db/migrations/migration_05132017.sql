\c tweedr_dev

DROP TABLE IF EXISTS tweeds;

CREATE TABLE IF NOT EXISTS tweeds (
  id BIGSERIAL PRIMARY KEY,
  tweed_text VARCHAR(1024),
  tweed_time BIGINT
);
