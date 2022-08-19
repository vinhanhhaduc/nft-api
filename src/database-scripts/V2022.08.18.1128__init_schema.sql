-- BEGIN TABLE typeorm_metadata
BEGIN;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE IF NOT EXISTS typeorm_metadata (
    "type" character varying NOT NULL,
    "database" character varying,
    "schema" character varying,
    "table" character varying,
    name character varying,
    "value" text
);
COMMIT;
--END TABLE typeorm_metadata

--BEGIN TABLE collection
BEGIN;

CREATE TABLE IF NOT EXISTS collection (
    id uuid DEFAULT uuid_generate_v4() NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL,
    name character varying DEFAULT NULL varying NOT NULL,
    symbol character varying,
    "mediaUrl" character varying,
    "metaDataId" uuid DEFAULT uuid_generate_v4(),
    PRIMARY KEY (id)
);

COMMIT;
--END TABLE collection

--BEGIN TABLE NFTItems
BEGIN;

CREATE TABLE IF NOT EXISTS NFTItems (
  id uuid DEFAULT uuid_generate_v4() NOT NULL,
  "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
  "updatedAt" timestamp with time zone DEFAULT now() NOT NULL,
  name character varying DEFAULT NULL NOT NULL,
  address character varying,
  price numeric DEFAULT 0::numeric NOT NULL,
  "creatorId" uuid DEFAULT uuid_generate_v4(),
  "ownerId" uuid DEFAULT uuid_generate_v4(),
  "mediaUrl" character varying,
  "traitId" uuid DEFAULT uuid_generate_v4(),
  PRIMARY KEY (id)
)

COMMIT;
--END TABLE NFTItems

--BEGIN TABLE trait
BEGIN;

CREATE TABLE IF NOT EXISTS trait (
  id uuid DEFAULT uuid_generate_v4() NOT NULL,
  "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
  "updatedAt" timestamp with time zone DEFAULT now() NOT NULL,
  speed character varying,
  power character varying,
  PRIMARY KEY (id)
);

COMMIT;
--END TABLE trait

--BEGIN TABLE user
BEGIN;

CREATE TABLE IF NOT EXISTS user_address (
  id uuid DEFAULT uuid_generate_v4() NOT NULL,
  "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
  "updatedAt" timestamp with time zone DEFAULT now() NOT NULL,
  name character varying DEFAULT NULL,
  address character varying DEFAULT NULL,
  "nftItemId" uuid DEFAULT uuid_generate_v4() NOT NULL,
  PRIMARY KEY (id)
);

COMMIT;
--END TABLE user