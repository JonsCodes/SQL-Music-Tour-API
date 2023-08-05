PGDMP     3                    {           pgadmin_music_info    15.3    15.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16896    pgadmin_music_info    DATABASE     t   CREATE DATABASE pgadmin_music_info WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';
 "   DROP DATABASE pgadmin_music_info;
                postgres    false            �            1259    16897    movies    TABLE     �   CREATE TABLE public.movies (
    movie_id integer NOT NULL,
    movie_name character varying NOT NULL,
    release_year smallint,
    category character varying
);
    DROP TABLE public.movies;
       public         heap    postgres    false            �            1259    16902    movies_movie_id_seq    SEQUENCE     �   CREATE SEQUENCE public.movies_movie_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.movies_movie_id_seq;
       public          postgres    false    214                       0    0    movies_movie_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.movies_movie_id_seq OWNED BY public.movies.movie_id;
          public          postgres    false    215            o           2604    16903    movies movie_id    DEFAULT     r   ALTER TABLE ONLY public.movies ALTER COLUMN movie_id SET DEFAULT nextval('public.movies_movie_id_seq'::regclass);
 >   ALTER TABLE public.movies ALTER COLUMN movie_id DROP DEFAULT;
       public          postgres    false    215    214                       0    16897    movies 
   TABLE DATA           N   COPY public.movies (movie_id, movie_name, release_year, category) FROM stdin;
    public          postgres    false    214   �
       	           0    0    movies_movie_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.movies_movie_id_seq', 1, false);
          public          postgres    false    215            q           2606    16905    movies movies_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (movie_id);
 <   ALTER TABLE ONLY public.movies DROP CONSTRAINT movies_pkey;
       public            postgres    false    214                �  x�eR�n�0>��b  �@!{K�k�Ю
R.\L�¨�]9�jӧ�q�V�r�����L+뜮j\7��q<��S�
�Ֆ�dZHX��\�h�� �#_�d�Q8�$��&�om��� wV$Ɛ&��`ɸ�C��]���VL���\dQ>�<��Ϫں6�^���q����5�!l��2U�)�R�*|��q������fM�rʵb[2l���ܖ:oEsU�c����KT�Z�k��/����a	ӳ������P�7�ҧr9�7|�d�(���#X�_���߶U�}���QQh��e8�(�6S�Y;�J�;*�� ��h�;��/���v�����������2�.Uʾt؍�5��s�?�mƜك��;�.��bX�Îf��vj����9R��$|�9�'6�O��`��u�AV��ov����|�)�~:�{,t����Y�B��s��E     