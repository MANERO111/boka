# Boka Restaurant Web Orders - Module Odoo 18

Ce module Odoo 18 personnalise le module **Ventes (sale.order)** pour intégrer les commandes passées depuis le site web Boka Fast-Food.

---

## 📁 Contenu du module

```
odoo_custom_module/boka_web_orders/
├── __init__.py
├── __manifest__.py
├── models/
│   ├── __init__.py
│   └── sale_order.py        # Ajout des champs x_web_order_id, x_is_web_order
├── security/
│   └── ir.model.access.csv
└── views/
    └── sale_order_views.xml # Vues liste, formulaire, recherche et menu dédié
```

---

## 🚀 Installation dans votre Odoo 18 local

### 1. Copier le dossier du module
Copiez le dossier `odoo_custom_module/boka_web_orders` dans votre répertoire de modules complémentaires Odoo (`addons_path`), par exemple :
```bash
# Exemple si vos addons personnalisés sont dans custom_addons:
cp -r odoo_custom_module/boka_web_orders /chemin/vers/votre/odoo/custom_addons/
```

### 2. Mettre à jour la configuration Odoo (`odoo.conf`)
Vérifiez que votre `addons_path` contient bien votre dossier de modules personnalisés :
```ini
addons_path = /chemin/vers/odoo/addons,/chemin/vers/votre/custom_addons
```

### 3. Redémarrer Odoo
Redémarrez le service ou le conteneur Odoo 18 :
```bash
# Exemple sous Linux / systemd :
sudo systemctl restart odoo

# Ou si lancé en terminal :
./odoo-bin -c odoo.conf
```

### 4. Activer le Mode Développeur & Installer
1. Ouvrez Odoo dans votre navigateur (`http://localhost:8069`).
2. Allez dans **Paramètres** -> Activez le **Mode Développeur** (tout en bas).
3. Allez dans le menu **Applications**.
4. Cliquez sur le menu supérieur **Mettre à jour la liste des applications** (Update Apps List).
5. Supprimez le filtre "Applications" dans la barre de recherche.
6. Recherchez : `Boka Restaurant Web Orders` ou `boka_web_orders`.
7. Cliquez sur **Activer** (Install).

---

## ⚙️ Configuration côté Site Web Boka

Dans le fichier `.env.local` du projet Next.js :
```env
ODOO_URL=http://localhost:8069
ODOO_DB=votre_nom_de_base
ODOO_USERNAME=votre_email_admin
ODOO_PASSWORD=votre_mot_de_passe_ou_cle_api
```

---

## 🧪 Comment tester le flux complet

1. **Sur le site web Boka :**
   - Ajoutez des plats au panier (ex: *Boca Original*, *Tacos Mexicain*, *Pepsi 25cl*).
   - Ouvrez le Panier et cliquez sur **Commander**.
   - Entrez un Nom (*ex: Ahmed Alami*) et Téléphone (*ex: 0612345678*).
   - Validez.
   - Le site affiche : **N° de Commande : `WEB-20261111-XXXX`**.

2. **Dans Odoo 18 :**
   - Allez dans **Ventes** -> **Commandes** -> **Commandes Web Boka** (ou dans **Devis**).
   - Tapez le numéro `WEB-20261111-XXXX` dans la barre de recherche.
   - Le devis s'ouvre avec :
     - Le client (créé ou réutilisé avec son téléphone).
     - La référence commande web.
     - Les lignes de produits, quantités et prix en DH.
     - Les notes spéciales éventuelles du client.
   - Cliquez sur **Confirmer** pour valider la commande lorsque le client arrive au comptoir !

