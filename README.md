# Gestion des examens (Angular + Node mock)

## Lancer l'application
1. Construire et lancer les conteneurs :
   docker compose up --build

2. Ouvrir dans le navigateur :
   Frontend: http://localhost:8080
   API mock: http://localhost:3000/api/exams

## Notes
- Frontend : Angular standalone components, build multi-stage -> servi par nginx.
- Backend : Express simple en mémoire (reset à chaque redémarrage).
- Pour développement local sans Docker, tu peux lancer `npm install` puis `npm start` dans les dossiers respectifs (backend via Node, frontend via `ng serve` si Angular CLI installé).

N'hésitez pas à me faire un retour, merci de bien vouloir envoyer votre feedback à cette adresse : 
mr.amzil.mouad@gmail.com
