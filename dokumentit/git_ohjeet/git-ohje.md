# Git-käyttöohje

## Init

git clone https://github.com/jamktiko/plantiful.git // alusta oma kansio

git checkout dev // automaattiseti setuppaa remote branch trackin origin/dev

---

## Workflow

git checkout -b feature_name // dev branchista oma branchi jolla tehdään muutokset

git add . // muutokset stageen

git commit -m "message" // commit muutokset

git checkout dev

git pull // ennen mergeä päivitetään master

git merge feature_name

git push
