# Req logger api

Een eenvoudige express server. Het biedt een API waarmee JSON-gegevens kunnen worden verzonden en verwerkt. Validatie van JSON-invoer, logt verzoeken en geeft foutmeldingen voor ongeldige JSON of andere fouten.

## Functies

1. **JSON-validatie:** Controleert of de body van inkomende verzoeken een geldige JSON is.
2. **Logging:** Logt alle inkomende verzoeken, inclusief timestamp, methode, URL en body.
3. **Error handling:**
   - Detecteert en retourneert foutmeldingen voor ongeldige JSON.
   - Handelt onverwachte fouten af met een duidelijke foutmelding.
   - Retourneert een 404-melding voor niet-bestaande routes.
4. **API:** 
   - **POST** `/api`: Accepteert JSON-invoer en retourneert een bevestigingsbericht bij succes.

## Installatie

1. **Clone de repository:**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Instaleer afhankelijkheden**
    ``` bash
    npm install
    ```

3. **Start de server**
    ``` bash
    nodes server.js
    ```

# API Documentatie

## POST `/api`

### Beschrijving
Accepteert een JSON-payload in de body van een POST-verzoek. 

### Headers
- `Content-Type: application/json`

### Body
Moet een geldige JSON bevatten.
```json
{
  "key": "value"
}
```

# API Responses

### **200 OK**
- **Beschrijving:** Het verzoek is succesvol verwerkt.
- **Voorbeeld:**
  ```json
  {
    "message": "Verzoek ontvangen",
    "status": 200
  }
  ```

---

### **400 Bad Request**
- **Beschrijving:** De JSON in de body ontbreekt of is ongeldig.
- **Voorbeeld:**
  ```json
  {
    "message": "Body ontbreekt of is leeg",
    "status": 400
  }
  ```

---

### **404 Not Found**
- **Beschrijving:** De route bestaat niet.
- **Voorbeeld:**
  ```json
  {
    "message": "Niet gevonden",
    "status": 404
  }
  ```

---

### **500 Internal Server Error**
- **Beschrijving:** Een onverwachte fout is opgetreden.
- **Voorbeeld:**
  ```json
  {
    "message": "Interne serverfout",
    "status": 500
  }
  ```

  ### Functies later toe te voegen

  - `Andere verzoeken loggen, standaard json teruggeven bij GET verzoeken bijvoorbeeld`
  - `Headers loggen`
  - `Docker compose files aanmaken voor snelstart container`

  