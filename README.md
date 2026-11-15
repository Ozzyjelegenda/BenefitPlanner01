# Benefit Planner – web (GitHub Pages)

Tahle verze běží na vlastní adrese (`https://<uživatel>.github.io/<repozitář>/`). Na rozdíl od verze na claude.ai v ní fungují:

- instalace na plochu telefonu i počítače jako aplikace (PWA),
- práce bez internetu,
- systémové notifikace i na Androidu,
- načítání článků ve Vzdělávání,
- tisk.

Data se na GitHub **nenahrávají**. Zůstávají zašifrovaná jen v prohlížeči, kde aplikaci používáte. Kód je veřejný, ale žádná data ani PIN v něm nejsou.

## 1. Zveřejnění (jednou, asi 10 minut)

1. Založte si účet na github.com, pokud ho nemáte.
2. Vpravo nahoře klikněte na **+ → New repository**.
   - Repository name: například `planner`
   - Zvolte **Public**. Na bezplatném účtu jinak Pages nefungují.
   - Klikněte na **Create repository**.
3. Na stránce repozitáře klikněte na **uploading an existing file**.
4. Rozbalte ZIP a do okna přetáhněte **všechny soubory**: `index.html`, `sw.js`, `manifest.webmanifest`, 4× `*.png` a `README.md`. Nahrávejte soubory, ne celou složku. Pak klikněte na **Commit changes**.
5. Otevřete **Settings → Pages**. U položky *Source* zvolte **Deploy from a branch**, branch **main**, složku **/ (root)** a klikněte na **Save**.
6. Za 1–2 minuty se nahoře ukáže adresa `https://<uživatel>.github.io/planner/`.

## 2. Převod dat z dosavadní verze

Každá adresa má vlastní úložiště. Nová verze proto začíná prázdná, s PINem **2607**.

1. Ve **staré** verzi otevřete **Nastavení → Záloha dat → Stáhnout zálohu** (nebo Zkopírovat zálohu).
2. V **nové** verzi zadejte PIN 2607, nastavte nový 6místný PIN a uložte si záchranný kód.
3. Otevřete **Nastavení → Obnovit ze zálohy**. Vložte text zálohy a do pole „PIN nebo záchranný kód zálohy“ zadejte PIN ze **staré** verze. Klikněte na **Obnovit data** a pak ještě jednou pro potvrzení.

## 3. Instalace do telefonu

- **Android (Chrome):** otevřete adresu, v menu ⋮ zvolte **Přidat na plochu / Nainstalovat aplikaci** a povolte notifikace.
- **iPhone (Safari):** otevřete adresu a zvolte **Sdílet → Přidat na plochu**. Notifikace na iPhonu fungují jen v aplikaci spuštěné z plochy (iOS 16.4 a novější).

## 4. Připomínky narozenin a svátků e-mailem

Notifikace aplikace chodí jen tehdy, když je aplikace otevřená (stačí na pozadí). Spolehlivé připomínky i e-mailem zajistí kalendář:

1. Otevřete **Klienti → 📅 Do kalendáře → Stáhnout .ics**.
2. Google Kalendář na počítači:
   - **Nastavení → Přidat kalendář → Vytvořit nový kalendář** s názvem například „Klienti“.
   - **Import a export → Importovat** soubor .ics do kalendáře „Klienti“.
3. U kalendáře „Klienti“ otevřete **Nastavení** a v části **Upozornění na celodenní události** přidejte **E-mail – 1 den předem v 9:00**. Případně přidejte i oznámení.
4. Po přidání nových klientů kalendář „Klienti“ smažte a soubor naimportujte znovu.

Apple Kalendář a Outlook převezmou připomenutí přímo ze souboru (počet dní podle nastavení u klienta).

## Aktualizace aplikace

Novou verzi `index.html` nahrajte stejně jako v kroku 4: *Add file → Upload files*. Starý soubor se přepíše, data zůstanou. Telefon novou verzi načte při dalším otevření s internetem.
