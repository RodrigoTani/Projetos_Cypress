# Cypress Automation with Mochawesome Reports

Este projeto utiliza **Cypress** para testes end-to-end automatizados e gera relatórios com o plugin **cypress-mochawesome-reporter**. Os relatórios são publicados automaticamente na branch `gh-pages` do GitHub, sendo exibidos via GitHub Pages.

---

## Estrutura

- **Cypress**: testes automatizados com base no site [https://sampleapp.tricentis.com/101](https://sampleapp.tricentis.com/101)
- **Relatórios**: JSON gerado em `cypress/reports/json` e relatório HTML combinado (merge) gerado no mesmo diretório.
- **CI/CD**: GitHub Actions executa os testes, gera relatórios e publica via GitHub Pages.
- **Link Relatório**: https://rodrigotani.github.io/CypressAutomation/
---

## Como usar

### 1. Executar localmente

```bash
npm install
npx cypress open     # para rodar testes em modo interativo
npx cypress run      # para rodar testes em modo headless
```

Os relatórios JSON serão gerados em `cypress/reports/json`.

### 2. Relatórios

Após rodar os testes, execute (localmente ou via CI) o comando para mesclar e gerar o relatório HTML:

```bash
npx mochawesome-merge "cypress/reports/json/*.json" > cypress/reports/json/report.json
npx marge cypress/reports/json/report.json --reportDir cypress/reports/json --overwrite
```

O arquivo `index.html` gerado estará em `cypress/reports/json/index.html`.


## Observações

- Os relatórios são gerados em JSON e HTML no mesmo diretório `cypress/reports/json`.
- O GitHub Pages publica exatamente essa pasta.
- O arquivo principal do relatório é `index.html`.

---

## Dependências principais

- Cypress
- cypress-mochawesome-reporter
- mochawesome-merge
- mochawesome-report-generator
- peaceiris/actions-gh-pages (para deploy do GitHub Actions)

---
