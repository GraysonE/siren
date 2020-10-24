dup:
	cd laradock_siren && docker-compose up -d nginx mysql redis workspace && cd ..

dstop:
	cd laradock_siren && docker-compose stop && cd ..

dssh:
	cd laradock_siren && docker-compose exec workspace bash && cd ..

