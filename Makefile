bootstrap:
	@echo "==============================Bootstrapping application==============================" 
	docker-compose up -d

	@echo "==============================Waiting for bootstrapping...=============================="
	sleep 10

	@echo "Application is up and running. Now you can access application through http://localhost:3000"

cleanup:
	@echo "==============================Shutting down application==============================" 
	docker-compose down -v

	@echo "==============================Processing...=============================="
	sleep 5

	@echo "Shut down complete"