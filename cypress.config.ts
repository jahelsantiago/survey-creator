import { defineConfig } from "cypress";

const envirmoment : "DEV" | "PROD" = "DEV";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: envirmoment == "DEV"?"http://localhost:3000/" : "https://noencuentromisanticonceptivos.vercel.app/",
  },
});
