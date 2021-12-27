--
-- PostgreSQL database dump
--

-- Dumped from database version 13.5 (Debian 13.5-1.pgdg110+1)
-- Dumped by pg_dump version 13.5 (Debian 13.5-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.migrations (
    id integer NOT NULL,
    name character varying(255),
    batch integer,
    migration_time timestamp with time zone
);


--
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;


--
-- Name: migrations_lock; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.migrations_lock (
    index integer NOT NULL,
    is_locked integer
);


--
-- Name: migrations_lock_index_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.migrations_lock_index_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: migrations_lock_index_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.migrations_lock_index_seq OWNED BY public.migrations_lock.index;


--
-- Name: notes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.notes (
    id character varying(255) NOT NULL,
    "userId" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone,
    header character varying(255),
    body text
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id character varying(255) NOT NULL,
    email character varying(255),
    "firstName" character varying(255),
    "lastName" character varying(255),
    password character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone
);


--
-- Name: migrations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);


--
-- Name: migrations_lock index; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.migrations_lock ALTER COLUMN index SET DEFAULT nextval('public.migrations_lock_index_seq'::regclass);


--
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.migrations (id, name, batch, migration_time) FROM stdin;
1	20211209163612_initial.js	1	2021-12-27 17:00:23.203+00
2	20211213091023_default_user.js	1	2021-12-27 17:00:25.036+00
\.


--
-- Data for Name: migrations_lock; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.migrations_lock (index, is_locked) FROM stdin;
1	0
\.


--
-- Data for Name: notes; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.notes (id, "userId", "createdAt", "updatedAt", header, body) FROM stdin;
19947027-9b5c-4791-bcd8-d03187960399	21021c29-8181-4996-885f-2a4f282e2f30	2021-12-27 17:00:51.175+00	\N	Title!	lorem ipsum I cant be bother to google it
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users (id, email, "firstName", "lastName", password, "createdAt", "updatedAt") FROM stdin;
8dc38fe2-95d5-4b53-955a-968ec68be23c	test@email.com	\N	\N	$2b$15$RQ1irHgNuBh0c1AQ5n1QYuQagFZHpGqA9ck0LQ34jvy5dBCtYw5.u	2021-12-27 17:00:23.206+00	\N
\.


--
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.migrations_id_seq', 2, true);


--
-- Name: migrations_lock_index_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.migrations_lock_index_seq', 1, true);


--
-- Name: migrations_lock migrations_lock_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.migrations_lock
    ADD CONSTRAINT migrations_lock_pkey PRIMARY KEY (index);


--
-- Name: migrations migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);


--
-- Name: notes notes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.notes
    ADD CONSTRAINT notes_pkey PRIMARY KEY (id);


--
-- Name: users users_email_unique; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_unique UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: notes_userid_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX notes_userid_index ON public.notes USING btree ("userId");


--
-- Name: users_email_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX users_email_index ON public.users USING btree (email);


--
-- PostgreSQL database dump complete
--

