CREATE TABLE users (
    id VARCHAR(200) PRIMARY KEY NOT NULL,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL,
    password VARCHAR(200) NOT NULL,
    created_at TIMESTAMP NOT NULL
);

CREATE TABLE hub (
    id  VARCHAR(200) PRIMARY KEY NOT NULL,
    name VARCHAR(200) NOT NULL,
    user_id VARCHAR(200) NOT NULL
);

CREATE TABLE message (
    id SERIAL PRIMARY KEY,
    content VARCHAR(200) NOT NULL,
    sended_at TIMESTAMP NOT NULL,
    user_id VARCHAR(200) NOT NULL,
    hub_id VARCHAR(200) NOT NULL
);

CREATE TABLE user_hub (
    user_id VARCHAR(200),
    hub_id VARCHAR(200),
    PRIMARY KEY (user_id, hub_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (hub_id) REFERENCES hub(id) ON DELETE CASCADE
);