import type { ChatLanguage } from "./chat-languages";

export const PREMIER_BANK_KNOWLEDGE = `
Premier Bank website knowledge base — use only these verified facts.

GENERAL AND SAFETY
- Premier Bank's digital assistant provides general website information only. It cannot access accounts, complete transactions, approve accounts, or provide personalised financial advice.
- Never request or accept a password, PIN, OTP, card number, CVV, or other confidential banking credential. For account-specific or sensitive matters, direct customers to official support.
- Official contact: +252 61 7771000, +252 63 3800017, and info@premierbank.so.
- Mogadishu HQ Branch: KM4, Maka Al Mukarama Street, Wabari District.
- Hargeisa HQ Branch: Durdur Business Center, Road No.1, 26 Jun District.

PERSONAL CURRENT ACCOUNT
- The Personal Current Account is described as a flexible current account for easy everyday banking, convenient payments, and greater control.
- It supports easy access to money, Premier Wallet, account statements, account-to-account transfers through available digital banking services, debit-card access where supported, compatible-device payments where supported, cardless ATM withdrawals at supported ATMs, and digital banking.
- Verified Personal Current Account requirements are only: a valid, unexpired National ID or Passport; a valid Work Permit if the applicant is a non-citizen; and two passport-size photos. Do not add a Driver's License, proof of address, employment letter, recommendation letter or another document unless separately verified later.
- The website does not state fees, balances, limits, approval criteria, or processing times. Refer customers to official support for those details.

DIASPORA BANKING
- Diaspora Banking is for staying connected across Africa, supporting loved ones, saving, and planning for the future with Premier Bank.
- The website lists: Premier Diaspora Current Account, Diaspora Savings Account, Diaspora Student Account, Premier Diaspora Junior Savings Account, Foreign Currency Savings Accounts, Wallet & Money Transfer Services, and ATM Mastercard & Visa solutions.
- Digital features mentioned are international banking, Mastercard access where supported, contactless payments, compatible-device payments, secure digital banking, mobile access, and fast, convenient everyday banking.
- The current official Diaspora Banking page names USA, UK, and Kenya as supported countries and notes that more countries will be added. For fees, currency availability, limits, or eligibility details, direct customers to support.

PREMIER WALLET AND DIGITAL BANKING
- Premier Wallet is Premier Bank's mobile experience for sending money, paying bills, topping up airtime, and managing finances securely from anywhere.
- When a customer asks generally how to use Premier Wallet or what can be done with it, explain its available services: Transfer Money for sending money to another person, Pay for merchant payments, Top Up for moving money from a linked account to the Wallet, Withdraw for taking money out or moving it to an account where supported, Bill Payment for supported bills, balance viewing, and Mobile Banking for linked bank-account and Mastercard management. A general usage question is not a registration request; provide registration steps only when the customer explicitly asks how to register, sign up or create a Wallet.
- Download links on the website: Google Play https://swiy.co/premierwallet and App Store https://hi.switchy.io/premierwallet.
- Do not claim a particular device, merchant, app store payment, contactless payment, or cardless withdrawal capability unless it is described as supported.

OFFICIAL PREMIER BANK FACEBOOK INFORMATION
- Premier Virtual Card is a digital card requested through Premier Wallet without visiting a branch. It may be used for supported online payments, including digital subscriptions such as ChatGPT and other online services that accept the card. User-provided official service information says supported online payments are fee-free.
- Premier Tap is Premier Bank's contactless-payment solution. The five approved item types in the supplied knowledge are Ring, Wristband/Bracelet, Eyeglasses/Glasses, Smartwatch Strap and Phone Case. Premier Tab, Premier Tapp, Premiertap, Premiertab, Tap2Pay, Tap 2 Pay, Tap Pay and Premier wearable refer to Premier Tap. Do not add other item types unless newly verified.
- Wallet Send in Premier Wallet supports international transfers to more than 110 countries, to bank accounts, mobile wallets, or cash pickup. Egypt is explicitly confirmed. Do not confirm another individual country, including China, unless it is shown in Wallet Send.
- Wallet Send country-aware routing: detect a named destination country or major city and preserve it through short follow-ups. Egypt/Masar/Cairo/Qaahira has the verified flow Wallet Send > Send Remittance > Egypt, using Show more countries when needed. For every other named destination, tell the customer to open Wallet Send, search for the normalized country and proceed only if it appears; never claim confirmed country support merely from an alias list. City mappings include Dubai/Abu Dhabi to UAE, London to UK, Nairobi/Mombasa to Kenya, Addis Ababa to Ethiopia, Doha to Qatar, Riyadh/Jeddah/Makkah/Madinah to Saudi Arabia, Istanbul/Ankara to Turkey, Toronto to Canada, Stockholm to Sweden, Oslo to Norway, Helsinki to Finland, Amsterdam to Netherlands, Paris to France, Rome/Milan to Italy and Berlin to Germany. Do not invent a full 110-country list or country-specific bank-account, mobile-wallet, cash-pickup provider, recipient field, fee, limit, exchange rate or delivery time. Use only the payout option and details displayed by the app. If a country is not verified, do not call it unsupported; instruct the customer to search Wallet Send and confirm with Premier Bank if it does not appear. Wallet Send and SWIFT are distinct: Wallet/Wallet Send international intent routes to Wallet Send; explicit SWIFT or international bank-transfer intent routes to SWIFT.
- SIPS is an instant domestic transfer system that lets Premier Bank customers send and receive money with banks across Somalia. Premier Wallet can be used to manage funds from anywhere.
- SIMAD University students can pay supported university fees by Premier Wallet on their phones without going to payment centres. The partnership also discussed LEAP Microfinance support for startups and SMEs, Student Financing (Qardul Xasan), and payment, education, innovation and economic-development initiatives.
- Premier Mastercard is available for USD 2 and can be used internationally wherever Mastercard is accepted. Verified use cases include online shopping (examples: Amazon, Alibaba and SHEIN), digital subscriptions (examples: ChatGPT, Claude and Gemini), supported POS payments, compatible ATM withdrawals, airline tickets and hotel bookings. Booking.com and Trip.com are additional travel-booking examples. Every named service or merchant still depends on its own payment page or terminal accepting Mastercard; never guarantee transaction success. User-provided official service information says online and POS payments are fee-free. Exact ATM fees and limits are not verified: confirm compatible ATM use first, then qualify only the unknown fee or limit. If payment is declined, check Mastercard acceptance and entered payment details, avoid repeated attempts, and contact Premier Bank if it continues; never guess the cause. If funds were deducted but payment failed or the merchant did not receive them, do not pay again until the first transaction is checked, retain the receipt or reference, and contact Premier Bank; never promise an automatic reversal. A supplied campaign requires at least USD 60 in spending; every additional USD 30 increases the chance of rewards. No campaign dates or further terms are available.
- Premier Bank participated in Visa Payments Forum 2026 in Paris, France, from June 30 to July 2, 2026. Representatives Dr. Mohamed Ghedi Jumale and Mr. Mahad Ahmed Mohamed discussed digital payments, AI, risk management, future financial services and international payment developments.
- Hajj/Umrah official content promotes Premier Mastercard and Premier Tap payments in Saudi Arabia. A named temporary Riyal POS-fee waiver must not be treated as a current or ongoing offer unless confirmed.
- Premier Bank will never request a PIN, OTP, password or CVV by phone call or message. Customers should use official accounts and avoid suspicious links, fake accounts and messages.
- A supported Premier Tap item is used near the contactless area of a compatible payment terminal. Customers can visit Premier Bank or a nearby branch to ask about current availability, but exact branch stock, item availability, price, delivery time and the nearest branch must not be guessed without verified information or the customer's location.
- Premier Payment Gateway is a business and merchant payment solution, in partnership with Mastercard and powered by Mastercard Payment Gateway Services (MPGS). It supports international card payments, online purchases, foreign-currency payments as described and e-commerce growth. Do not confuse it with Premier Wallet or a personal Mastercard.
- The verified Premier Payment Gateway video is titled "Premier Payment Gateway - Ku Xidhnow Dunida, Lana Ganacso Macaamiishaada". When a customer asks for its video, tutorial or visual explanation, render this exact clickable link: [Daawo muuqaalka Premier Payment Gateway](https://youtu.be/OkaOWVYy_4g). Never replace it with localhost or alter the URL.
- The verified Premier Tap video is titled "Premier Tap - Habka Ugu Fudud Lacag Bixinta Casriga Ah". When a customer asks for its video, tutorial or visual explanation, render this exact clickable link: [Daawo muuqaalka Premier Tap](https://youtu.be/KflE753vFpg). Never replace it with localhost or alter the URL.
- Administrator-approved video slash commands are deterministic resources. Exact commands such as /video, /wallet, /master, /tab, /wearables, /haleel, /scam, /diaspora, /atm, /virtual card and /gateway return the active approved videos for their mapped category; /video groups all categories and removes duplicate URLs. /pos and /swift currently have no approved video. The supplied command database has no Branch Locator resource URL for /branch, so it must not invent one. Slash-command routing applies only to an exact stored command; a normal banking question answers the question, and an actual fraud/security incident gets security support. Facebook video URLs are administrator-controlled: never invent, alter, replace or search for a substitute. All stored resources must render as safe clickable Markdown links.
- Premier Wallet withdrawal disambiguation: an unspecified Wallet withdrawal may mean Wallet-to-Account or Wallet-to-Cash, so ask whether the customer wants account transfer or cash. Do not assume Withdraw to Account. Account flow is Premier Wallet > Withdraw > Withdraw to Account > amount > lower Withdraw > review and confirm. Cash routes are a supported Premier Bank ATM, Premier Bank branch/teller, or available agent. ATM flow is Withdraw > ATM Withdraw > Continue > amount > Cashout; the app creates a temporary code, then at a supported Premier Bank ATM choose ATM Cashout, enter the phone number and follow the prompts. Never request or expose the temporary code. Teller flow is Withdraw > Cash Withdraw > Teller, then scan teller QR or enter Teller ID if allowed, amount, review and confirm. Agent flow is Withdraw > Cash Withdraw > appropriate Merchant/Agent, QR or ID if requested, amount, review and confirm; do not claim every agent supports every withdrawal type. Normalize taller/teler/telar/tellar to teller and preserve withdrawal context so short replies account, cash, ATM, branch, teller or agent receive the correct procedure immediately.
- Premier Wallet registration: download the app, choose Sign Up, enter mobile number, full name and an identification type such as National ID or Passport, verify the number using OTP, create a private PIN, and complete registration. Never ask a customer for an OTP or PIN.
- General Premier Bank account application is a distinct intent from asking what Premier Wallet does. Verified application flow: download and open Premier Wallet, select Sign Up, complete all information requested, submit the application, then wait while it is processed. A response may arrive through email and WhatsApp. Never promise approval or claim access to application status. When requirements are requested, distinguish the account type. Personal Current Account requires only a valid National ID or Passport, a valid Work Permit for non-citizens, and two passport-size photos. Business Account requires a valid business license, valid National ID or Passport, a notarized document and an application letter. Never add unverified documents.
- A customer outside Somalia may start a Premier Bank account application through Premier Wallet Sign Up and may use available Premier Wallet or Mobile Banking services abroad, subject to service and transaction conditions. They may use appropriate available services to send or receive money, support family and pay available bills. Route a specifically international destination to Wallet Send where appropriate. Do not invent country-specific restrictions or guarantee availability or approval. Physical ATM cash withdrawal abroad uses Premier Mastercard at ATMs supporting Mastercard; do not claim Premier Wallet directly withdraws from every international ATM.
- Additional verified Wallet support: profile photo is Menu (three lines, upper left) > Profile > add or change photo. For a lost phone, contact Premier Bank promptly. For a missing OTP, check the phone number and signal, wait briefly and retry only if the app permits; never request the OTP. For a wrong transfer, do not send another corrective transaction, retain the reference and contact Premier Bank without promising reversal. For pending or failed transactions, check History, avoid a duplicate retry if funds were deducted, retain the reference and contact Premier Bank. New-phone verification must follow only prompts shown by the app; phone-number and email-change procedures are not verified. A locked Wallet or account requires avoiding repeated uncertain credentials and contacting Premier Bank. Do not guarantee every connected ATM, branch, teller or provider is available 24/7.
- Premier Wallet supports electricity bill payments: open Bill Payments, select the bill, enter the required bill/meter/account details, confirm the amount, and complete payment. Do not claim a specific electricity provider or identifier.
- Official supplied content places Premier Bank ATMs at two Jabane Supermarket locations in Hargeisa. Mentioned ATM services include cash withdrawal, PIN change, balance inquiry and other ATM services. Ramadan announcement hours of 08:00 AM–04:00 PM are historical, not year-round current hours. Premier Bank ATM Cash Deposit was announced on 22.08.2024: supported ATMs can accept cash deposits in real time, securely and 24/7. Limits, note denominations, fees and supported locations are not supplied.
- Cash-withdrawal location guidance: customers may use a nearby Premier Bank ATM, Premier Bank branch, or an available supported agent/teller. Do not identify the nearest location without the customer's area, and do not invent withdrawal limits. Cash deposits may be made through a Premier Bank branch or an ATM that specifically supports Cash Deposit; do not claim every ATM accepts deposits or that every location is available 24/7. At night, the customer may use a nearby available ATM only if that specific ATM supports Cash Deposit. If funds are held in an external mobile-money service such as EVC Plus, eDahab, Jeeb, Amtel Cash, Sahal, Telesom or ZAAD, direct the customer to an available agent/teller or Premier Bank branch for the supported funding method. Do not claim a direct mobile-money integration or invent a USSD code, menu, fee, limit or transfer procedure.
- Premier Wallet supports Wallet-to-Wallet transfers through Transfer Money: choose the recipient, enter the amount, optionally choose Transaction Category, select Next, review the details and send. Merchant QR Code and Merchant ID belong to Merchant Payment through Pay, not Wallet-to-Wallet transfer. Premier Wallet also supports top-up, Wallet-to-Account transfers, deposits and withdrawals through supported services, balance checking, transaction history, exchange/currency conversion, and financial management. Do not invent recipient methods, limits, fees, currency-pair availability or undocumented steps.
- Premier Wallet customer-support handling: customers can check their own balance and transaction history inside the Wallet, but the assistant cannot access balances, transaction status or account data. For a pending, failed or undelivered transfer, tell the customer to check the transaction status, avoid sending again before confirming the earlier transaction, retain the transaction reference if available, and contact Premier Bank. For login or MPIN issues, advise using the official recovery process or contacting Premier Bank; never request or accept an MPIN, PIN, OTP, password or CVV.
- Wallet payment details: supported merchant payments may use a QR Code scan or Merchant ID. Wallet-to-Bank transfer is source-mentioned; Bank-to-Wallet steps are not verified and must be confirmed in the app or with Premier Bank. Agent and supported ATM deposit/withdrawal services are source-mentioned, but agent-specific steps and availability must be confirmed. Funding a Mastercard from the Wallet is not verified and must not be described as a confirmed process.
- Profile-photo settings, exact MPIN-change menus, specific app buttons, card-funding steps, provider menus, limits, fees and exchange rates are not verified. Direct customers to the current Wallet app or Premier Bank instead of inventing steps.
- Verified Premier Wallet app guidance supplied by the customer: Forget MPIN is Menu (three lines, upper left) > Settings > Forget MPIN > Verify > create a new MPIN. Change Password is Menu > Settings > Change Password, then enter the current password and the new password twice inside the app. Forget Password is available at login: select Forget Password, enter the mobile number, verify the received code inside the app, then create a new password. Biometrics are enabled through Menu > Settings > Touch ID/Face ID on supported devices. My QR is available from the lower app navigation and can be shared.
- Verified payment and information guidance: Merchant payment is lower navigation > Pay, then scan a merchant QR Code or enter Merchant ID, verify the merchant name, enter the amount and send. Transaction history is lower navigation > History; a date can be selected via the book icon and a report may be viewed in-app or sent by email. Bank-account balance can be viewed in Premier Wallet through Mobile Banking, then the customer enters their PIN inside the app and taps the eye icon. Digital card information is Mobile Banking > Card Management > Show Digital Card/eye icon, with PIN entered only in the app. Card Management includes Block Card, Unblock Card, Reset Card PIN, Change Card PIN and Delete Card. If multiple cards are linked, users can slide or use the side controls to view another card.
- Eligible Premier Wallet bill-payment examples include electricity, TV and school/university fees. The supplied flow uses Bill Payments/Utility or Fee Payments, selection of the relevant service, relevant account/meter/student/customer number, amount confirmation and payment completion. Do not claim a specific provider, university or identifier unless it is verified; SIMAD is specifically verified for supported university-fee payments.
- Community/CSR source-provided information mentions Premier Bank support for SOS Children's Villages Somalia, including children's living expenses, healthcare and education.
- Historical source-provided recognitions include Somali Tech Awards, Digital Banking Award, Digital Wallet Advancement Award, Best Mobile Money App of the Year 2025, First Wearable Commercial Launch in East Africa, and Outstanding African Banking Brand Excellence Award 2025. Do not present historical awards as current offers.
- Additional source-mentioned ATM locations are Safari Resort Hotel in Borama, Bosaso International Airport, Al Jazeera Hotel in Gaalkacyo, and Jabir Plaza Hotel in Bosaso. This is not a complete ATM list; no addresses, coordinates, hours or location-specific availability are supplied.
- Source-mentioned Premier POS merchant examples are Hyderabad Biryani, Al Jazeera Hotel in Gaalkacyo, and Jabir Plaza Hotel in Bosaso. They are examples only, not a complete merchant directory. Premier POS supports card payments for merchants, including Mastercard, Visa and contactless payments where supported; merchant settlement is available where supported.
- Source-provided information describes discussion of NIRA/digital identity and eKYC connection with financial services and Premier Wallet for financial inclusion. Technical integration details and current availability are not supplied.
- Premier POS enables supported payments at participating merchants. User-provided locations include Shaafici Pharmacy & Supermarket in Galkacyo and Al Macruuf Shopping Center in Bosaso, Puntland.
- Premier World Elite Mastercard is for premium international travel. Mentioned benefits include VIP services and access to supported airport lounges and coffee shops; price, eligibility, and exact participating locations are not supplied.
- Premier Wallet Manager helps businesses manage and pay employee salaries in a modern, convenient way. Enza Home is a source-mentioned example business user.
- A Premier Bank ATM is source-mentioned at SERENE SAROVAR Hotel in Hargeisa, with cash withdrawal, PIN change, balance check, and other available ATM services.
- Premier Bank received the Best Service Award 2025 from SOBS, the Somali National Quality Assurance body.
- LEAP is a Premier Bank, SIMAD iLab, and Direct Aid collaboration. Its first cohort supported 25 innovative businesses with USD 300,000 in Qardu Xasan financing after 100 applicants participated.
- The Wallet Send team won the Premier Cup 2025.
- SOS Children's Villages Somalia: user-provided official information says Premier Bank sponsored part of the children and contributed to living expenses, healthcare and education. Dr. Mohamed Ghedi Jumale expressed an intention to continue the support commitment.
- Somali Tech Awards historical information: Premier Bank received a Digital Banking Award after being described as the first bank in Somalia to implement an ATM cash-deposit machine. Premier Wallet received a Digital Wallet Advancement Award.
- ATM at Safari Resort Hotel in Borama: supplied services include cash withdrawal, PIN change and balance inquiry. The general ATM flow is insert the card, choose Somali or English, enter the PIN privately, then choose the service. Do not claim every ATM is 24/7; confirm the individual location.
- Additional POS examples are Hyderabad Biryani, Al Jazeera Hotel in Gaalkacyo and Jabir Plaza Hotel in Bosaso. Premier Mastercard and Premier Tap are stated as supported at those named merchants. These examples do not form a complete merchant directory.
- Mohamed Ali Adam is identified as Head of Digital Banking - Premier Wallet. Source-provided information discusses NIRA-Huubiye and eKYC for digital identity and financial-service development; it does not confirm technical availability details.
- Premier Virtual Card is digital, not a physical card. It can be used for supported online services such as Netflix, Spotify and Google Play. The supplied information says it can be created in Premier Wallet or Online Banking through Cards/Virtual Card, and managed through the app, including freeze and spending-limit controls. It has card-number, expiry and CVV details, which must never be shared with the assistant.
- Wallet Send explicitly supports Egypt: in Premier Wallet, choose Wallet Send, Send Remittance, then Egypt; use Show more countries if needed. The exact fee is not supplied and must not be guessed.
- Premier Wallet source-provided supported examples include water, education, TV/Cable and healthcare payments; Wallet-to-Wallet and Wallet-to-Account transfers; international remittances through Wallet Send; merchant payments through QR Code or Merchant ID; airtime top-up; in-app currency exchange; and transaction history. QR Code and Merchant ID are merchant-payment methods, not Wallet-to-Wallet recipient methods. Limits, fees, providers and availability may vary and must not be invented.
- Premier Bank money-transfer questions must be routed by the transfer type. The verified routes are Wallet-to-Wallet through Transfer Money; Account-to-Account through available digital-banking services, without inventing undocumented menu steps; international transfer through Wallet Send to more than 110 countries; Account-to-Wallet through Top Up; and Wallet-to-Account through Withdraw to Account. When a customer asks generally how to send money without identifying a route, briefly present these available options. A specific Wallet, Account, international, Top Up, Withdraw or merchant-payment request takes priority over the general transfer overview.
- Historical awards: Premier Bank Somalia Limited is source-mentioned as receiving Outstanding African Banking Brand Excellence Award 2025 at the 15th African Business Leadership Awards during the ALM Africa Summit in London. The stated reasons are modern banking, digital services, SME support, ethical banking and financial inclusion; Jibril Xasan Maxamed is source-mentioned as accepting it. Premier Wallet is source-mentioned as receiving Best Mobile Money App of the Year 2025 from Somali Business Awards, accepted by Mohamed Ali Adam. Premier Bank is also source-mentioned as receiving First Wearable Commercial Launch in East Africa at Mastercard Edge 2025.
- Diaspora Account source-provided details: it may be opened from abroad through a supported approved agency without travelling to Somalia. It is intended to help customers manage money, support family, save and plan future investment. The supplied requirements are Passport or National ID, an application form and any other requested evidence. A dedicated Diaspora team is mentioned. The full country list must be confirmed with Premier Bank. Relationship-manager and property/land-financing claims in the supplied text refer specifically to Premier Bank Kenya and must not be treated as Premier Bank Somalia services without confirmation.

- Premier Bank Kenya entity boundary: Kenya-specific verified services must never be mixed with Premier Bank Somalia or Premier Wallet. Premier Bank Kenya M-PESA account deposits use Lipa na M-PESA > Paybill > Business Number 919700 and the customer's 10-digit Premier Bank Kenya account number. The M-PESA PIN is entered privately inside M-PESA and must never be requested in chat. Kenya-only terms include Paybill 919700, M-PESA, KENSWITCH, POST Bank, PESALINK and *342#. Kenya account services also include the supplied branch/POST Bank deposit and withdrawal options, transfer to M-PESA through Kenya Mobile Banking or USSD, Premier Bank/KENSWITCH ATM access, PESALINK transfers, balance checks through Mobile Banking, USSD, Internet Banking or ATM, SMS Alerts, and Kenya Mobile Banking registration through the app or *342# Self-registration. For an ambiguous Paybill question, qualify the answer as Premier Bank Kenya. A request merely to send money to Kenya or Nairobi remains Wallet Send unless M-PESA or a Premier Bank Kenya account is established.
- Wallet Send verified international flow: open Premier Wallet > Wallet Send > Send Remittance > select the destination; use Show More Countries if it is not immediately visible; enter recipient information and amount; review the displayed exchange rate, recipient amount and any applicable fee; confirm only after checking details. Wallet Send supports more than 110 countries. Egypt and Kenya are specifically verified destinations in the supplied information. For Kenya, sending to an M-PESA recipient is supported where the app offers that route: select Kenya and enter the Kenyan recipient number exactly as requested by the app. Never confuse Wallet Send to a Kenya M-PESA recipient with M-PESA Paybill 919700, which deposits into a Premier Bank Kenya account. Preserve Wallet Send context for short country, city, M-PESA, rate and fee follow-ups. The verified video guide must be rendered as [Daawo muuqaalka Wallet Send](https://www.facebook.com/watch/?v=881086390235716). Render official app downloads as [Google Play](https://swiy.co/premierwallet) and [App Store](https://hi.switchy.io/premierwallet).

CARDS, SERVICES, AND FINANCING
- Premier Mastercard options presented in the project are Platinum, Corporate, and World Elite. The current official Premier Mastercard page also references Classic Mastercard. Mastercard is described for internet/POS payments and ATM cash withdrawals wherever the Mastercard logo is displayed.
- The website lists Payroll Processing, ATM Banking, Premier POS, and SWIFT as banking services.
- Financing solutions listed are Auto Finance, Land Finance, and Business Financing.
- Agency Banking helps customers access essential banking services through trusted agents close to them, including deposits, withdrawals, and banking needs beyond traditional banking hours.
- The official POS page states that Premier POS is free inside Somalia. Do not infer fees for any other service. The official sources do not provide exchange rates, financing rates, card limits, approval decisions, or detailed policy terms.
- Haleel is a joint Hajj and Umrah instalment-payment service from Premier Bank and Hajj, Umrah Network Somalia (HUNSo). It is intended for customers who cannot pay an entire Hajj or Umrah package at once.
- User-provided official service information for Haleel states that a customer may pay the full selected package price at once, or pay at least 30% initially and pay the remaining balance through an agreed instalment plan within one year. The financing is interest-free and described as Sharia-compliant. Package prices and monthly instalment amounts are not supplied and must be confirmed with Premier Bank or HUNSo.
- Haleel's Umrah availability is stated as Muharram through Ramadan in the Hijri calendar. Availability after Ramadan, package eligibility, and non-Somali passport acceptance must be confirmed with Premier Bank or HUNSo. Somali passport holders may apply according to the supplied service information.
- To enquire about Haleel: contact Premier Bank or HUNSo, choose an available package, pay at least 30%, and sign the agreed instalment plan. The supplied timeline says the service idea began in November 2019, launched in January 2020, and was officially reopened on 23 December 2024.
- Current Premier Bank senior management from the official management page: Dr. Mohamed Ghedi Jumale is Chief Executive Officer; Abdirashid Ali Adle is Head of Investment & Financing; Abdishakur Mohamed Afrah is Head of Corporate, SME and Retail; Mahad Ahmed Mohamed is Head of Operation; Abdinasir Hassan Ali is Head of IT; Mohamed Abdirahman Sheik is Head of Finance; Safia Abdi Abdullahi is Head of Risk & Compliance; Sayid Omar Ali Abubakar is Head of Internal Audit; Mohamed Ali Adam is Head of Digital Banking - Premier Wallet; and Isak Mohamed Ali is Head of Human Resources & Administration. The 2024 appointment information names Jibril Hassan as Chairman and states Dr. Ghedi succeeded Osman Duale Ahmed.

BRANCH LOCATOR
- The Branch Locator can search branch name, city, or location; show a branch on the map; show directions; and list phone/contact information in the directory.
- The directory includes locations across Somalia and Kenya. Customers should use the Branch Locator page for the current branch address, map, and directions.
- Listed directory contact manager name: Zakaria Hassan Ismail. Listed directory phone: +252615924418. Some branch data may vary by branch; advise customers to verify through the Branch Locator or official support.

WEBSITE NAVIGATION
- Key website areas include Personal Banking, Business Banking, International Banking, Services, Branch Locator, Online Banking, Current Account, Diaspora Banking, Premier Wallet, Mastercard, financing, Agency Banking, and Banking Services.
- Online Banking is accessed through Premier Bank's secure Online Banking link on the website.
`;

export const CHAT_FALLBACK = "I'm sorry, I don't have enough official information to answer that accurately. Please contact Premier Bank customer support for assistance.";

const quickTranslations: Record<ChatLanguage, { current: string; open: string }> = {
  so: {
    current: "Premier Bank waxay Personal Current Account ku qeexdaa akoon dabacsan oo loogu talagalay baahiyaha bangiga maalinlaha ah, lacag-bixinno fudud, iyo maamul dhaqaale oo ka wanaagsan. Website-ku ma daabicin khidmadaha, hadhaaga loo baahan yahay, xuduudaha, shuruudaha ansixinta, ama wakhtiyada habaynta; fadlan kala xiriir Premier Bank faahfaahintaas.",
    open: "Si aad Premier Bank Personal Current Account u furato, waxaa waajib ah National ID ama Passport aan dhacsanayn, Work Permit sax ah haddii aad tahay non-citizen, iyo laba passport-size photos.",
  },
  en: {
    current: "Premier Bank describes the Personal Current Account as a flexible account for easy everyday banking, convenient payments, and greater control. The website does not publish fees, balances, limits, approval criteria, or processing times; please contact Premier Bank for those details.",
    open: "To open a Premier Bank Personal Current Account, you need a valid National ID or Passport, a valid Work Permit if you are a non-citizen, and two passport-size photos.",
  },
  sw: {
    current: "Premier Bank inaeleza Personal Current Account kama akaunti inayonyumbulika kwa huduma za kila siku, malipo rahisi na udhibiti zaidi. Tovuti haichapishi ada, salio linalohitajika, viwango, vigezo vya idhini au muda wa uchakataji; tafadhali wasiliana na Premier Bank kwa maelezo hayo.",
    open: "Ili kufungua Premier Bank Personal Current Account, unahitaji National ID au Passport halali, Work Permit halali ikiwa wewe si raia, na picha mbili za passport-size.",
  },
  am: {
    current: "Premier Bank የPersonal Current Accountን ለዕለታዊ ባንክ አገልግሎት፣ ምቹ ክፍያዎች እና የተሻለ ቁጥጥር የተዘጋጀ ተለዋዋጭ ሂሳብ ብሎ ይገልጻል። ድህረ ገጹ ክፍያ፣ የሂሳብ ቀሪ፣ ገደብ፣ የፈቃድ መስፈርት ወይም የሂደት ጊዜ አያሳይም፤ ለዝርዝሩ Premier Bankን ያነጋግሩ።",
    open: "Premier Bank Personal Current Account ለመክፈት ትክክለኛ National ID ወይም Passport፣ ዜጋ ካልሆኑ ትክክለኛ Work Permit፣ እና ሁለት passport-size ፎቶዎች ያስፈልጋሉ።",
  },
  zh: {
    current: "Premier Bank 将 Personal Current Account 描述为灵活的日常账户，提供便捷支付和更强的资金管理。网站未公布费用、最低余额、限额、审批标准或处理时间；请联系 Premier Bank 获取这些信息。",
    open: "开设 Premier Bank Personal Current Account 需要有效的 National ID 或 Passport；非公民需要有效的 Work Permit；并需要两张 passport-size 照片。",
  },
  tr: {
    current: "Premier Bank, Personal Current Account hesabını günlük bankacılık, kolay ödemeler ve daha fazla kontrol için esnek bir hesap olarak tanımlar. Web sitesinde ücretler, gerekli bakiye, limitler, onay ölçütleri veya işlem süreleri yayımlanmamaktadır; bu bilgiler için lütfen Premier Bank ile iletişime geçin.",
    open: "Premier Bank Personal Current Account açmak için geçerli National ID veya Passport, vatandaş değilseniz geçerli Work Permit ve iki passport-size fotoğraf gerekir.",
  },
};

export type ChatPageLink = { label: string; href: string };

const cardlessTranslations: Record<ChatLanguage, string> = {
  so: "Cardless ATM withdrawal waxaa laga heli karaa ATM-yada la taageero. Habka saxda ah, shuruudaha, khidmadaha, iyo ATM-yada ku habboon hadda ma hayo. Fadlan nala soo xiriir si aan kuu siino habraaca saxda ah.",
  en: "Cardless ATM withdrawals are available at supported ATMs. I do not have the exact process, eligibility, fees, or compatible ATM details at the moment. Please contact us for the correct procedure.",
  sw: "Cardless ATM withdrawals zinapatikana kwenye ATM zinazotumika. Sina utaratibu kamili, vigezo, ada au ATM zinazooana kwa sasa. Tafadhali wasiliana nasi kwa maelekezo sahihi.",
  am: "cardless ATM withdrawals በተደገፉ ATMዎች ላይ ይገኛሉ። ትክክለኛውን ሂደት፣ ብቁነት፣ ክፍያ ወይም ተስማሚ ATM ዝርዝር በአሁኑ ጊዜ የለኝም። ለትክክለኛ መመሪያ እባክዎ ያነጋግሩን።",
  zh: "支持的 ATM 可提供无卡取款服务。目前我没有具体流程、资格、费用或兼容 ATM 的详情；请联系我们获取正确操作方式。",
  tr: "Kartsız ATM para çekme hizmeti desteklenen ATM'lerde kullanılabilir. Şu anda kesin işlem, uygunluk, ücret veya uyumlu ATM ayrıntılarına sahip değilim. Doğru prosedür için lütfen bizimle iletişime geçin.",
};

const atmTranslations: Record<ChatLanguage, string> = {
  so: "Premier Bank website-ku wuxuu taxaa ATM Banking oo kuu sahlaya inaad lacag kala baxdo, balance-ka hubiso, kana aragto mini-statement ATM-yada la heli karo. Saacadaha iyo availability-ga ATM gaar ah, fadlan ka hubi Premier Bank ama Branch Locator.",
  en: "Premier Bank's website lists ATM Banking for cash withdrawals, balance checks, and mini-statements at available ATMs. Please confirm the hours and availability of a specific ATM through Premier Bank or the Branch Locator.",
  sw: "Tovuti ya Premier Bank inaorodhesha ATM Banking kwa kutoa pesa, kuangalia salio na mini-statements kwenye ATM zinazopatikana. Tafadhali thibitisha saa na upatikanaji wa ATM mahususi kupitia Premier Bank au Branch Locator.",
  am: "የPremier Bank ድህረ ገጽ ATM Bankingን ለገንዘብ ማውጣት፣ ቀሪ ሂሳብ ማየት እና mini-statement ለማየት ይዘረዝራል። የተወሰነ ATM ሰዓት እና ተገኝነት ከPremier Bank ወይም Branch Locator ያረጋግጡ።",
  zh: "Premier Bank 网站列有 ATM Banking，可在可用 ATM 取现、查询余额和查看迷你对账单。请通过 Premier Bank 或 Branch Locator 确认特定 ATM 的营业时间和可用性。",
  tr: "Premier Bank web sitesi, mevcut ATM'lerde para çekme, bakiye sorgulama ve mini ekstre için ATM Banking hizmetini listeler. Belirli bir ATM'nin saatlerini ve kullanılabilirliğini Premier Bank veya Branch Locator üzerinden doğrulayın.",
};

const walletTranslations: Record<ChatLanguage, string> = {
  so: "Premier Wallet waa adeegga moobilka Premier Bank ee lacag dirista, top-up, biil-bixinta, deposit iyo withdrawal, hubinta balance-ka, transaction history, exchange/currency conversion, iyo maareynta maaliyadda meel kasta. Waxa kale oo uu taageeraa transfers gudaha iyo dibadda dalka iyadoo adeegga ku habboon la heli karo.",
  en: "Premier Wallet is Premier Bank's mobile financial service for money transfers, top-up, bill payments, deposits and withdrawals, balance checks, transaction history, exchange/currency conversion and financial management from anywhere. It also supports domestic and international transfers through the available service.",
  sw: "Premier Wallet ni huduma ya fedha ya simu ya Premier Bank kwa kutuma pesa, top-up, kulipa bili, kuweka na kutoa pesa, kuangalia salio, historia ya miamala, ubadilishaji wa fedha na usimamizi wa fedha kutoka popote. Pia inasaidia uhamisho wa ndani na wa kimataifa kupitia huduma inayopatikana.",
  am: "Premier Wallet ገንዘብ ለመላክ፣ top-up፣ ሂሳቦችን ለመክፈል፣ ገንዘብ ለማስገባትና ለማውጣት፣ ቀሪ ሂሳብና የግብይት ታሪክ ለማየት፣ ምንዛሬ ለመቀየር እና ፋይናንስን ለማስተዳደር የPremier Bank የሞባይል አገልግሎት ነው።",
  zh: "Premier Wallet 是 Premier Bank 的移动金融服务，可用于转账、充值、账单支付、存取款、余额查询、交易记录、货币兑换和随时管理财务，并通过可用服务支持国内及国际转账。",
  tr: "Premier Wallet; para transferi, top-up, fatura ödeme, para yatırma ve çekme, bakiye sorgulama, işlem geçmişi, döviz dönüşümü ve finans yönetimi için Premier Bank'in mobil finans hizmetidir. Kullanılabilir hizmet üzerinden yurt içi ve uluslararası transferleri de destekler.",
};

const accountManagementTranslations: Record<ChatLanguage, string> = {
  so: "Personal Current Account page-ku wuxuu xusaa account statements, account-to-account transfers, iyo digital banking services oo la heli karo. Sida loo galo, features-ka saxda ah, iyo wax shuruudo ah website-ku ma faahfaahin; fadlan la xiriir Premier Bank wixii hagid account gaar ah.",
  en: "The Personal Current Account page mentions account statements, account-to-account transfers, and available digital banking services. The website does not detail the exact access process or account-specific availability; please contact Premier Bank for guidance on your account.",
  sw: "Ukurasa wa Personal Current Account unataja account statements, account-to-account transfers na huduma za digital banking zinazopatikana. Tovuti haielezi utaratibu kamili wa ufikiaji au upatikanaji wa akaunti yako; tafadhali wasiliana na Premier Bank.",
  am: "የPersonal Current Account ገጽ account statements፣ account-to-account transfers እና የሚገኙ digital banking servicesን ይጠቅሳል። ትክክለኛው የመዳረሻ ሂደት ወይም ለሂሳብዎ ያለው ተገኝነት በድህረ ገጹ አልተገለጸም፤ Premier Bankን ያነጋግሩ።",
  zh: "Personal Current Account 页面提到可用的账户对账单、账户间转账和数字银行服务。网站未说明具体访问流程或您账户的可用性；请联系 Premier Bank 获取账户指引。",
  tr: "Personal Current Account sayfası account statements, account-to-account transfers ve mevcut digital banking services özelliklerinden bahseder. Kesin erişim süreci veya hesabınıza özel uygunluk web sitesinde açıklanmamıştır; lütfen Premier Bank ile iletişime geçin.",
};

const serviceTranslations: Record<ChatLanguage, { mastercard: string; onlineCard: string; hours: string; financing: string; mogadishu: string; mogadishuCount: string }> = {
  so: {
    mastercard: "Premier Bank website-ku wuxuu soo bandhigaa Platinum, Corporate, iyo World Elite Mastercard. Waxay bixiyaan worldwide Mastercard acceptance iyo faa'iidooyin ku xiran card-ka. Habka codsiga, khidmadaha, xuduudaha, iyo u-qalmitaanku laguma faahfaahin website-ka; fadlan la xiriir Premier Bank.",
    onlineCard: "Website-ku wuxuu sheegayaa in Premier Bank Mastercard loo isticmaalo purchases iyo payments meelaha Mastercard laga aqbalo. Ma xaqiijin karo merchant gaar ah sida Amazon ama Alibaba, khidmadaha, ama xuduudaha sababtoo ah xogtaas website-ku ma daabicin. Fadlan xaqiiji adeeggaaga iyo merchant-ka ka hor bixinta.",
    hours: "Branch Locator-ka Premier Bank wuxuu u taxayaa saacadaha branch-ka 7:30 AM – 5:00 PM. Maadaama saacaduhu ku kala duwanaan karaan branch, fadlan ka hubi Branch Locator ama Premier Bank ka hor booqashada.",
    financing: "Haa, Premier Bank website-ku wuxuu taxaa Auto Finance, Land Finance, iyo Business Financing. Website-ku ma daabicin rates, fees, ama shuruudaha ansixinta; fadlan la xiriir Premier Bank si aad u hesho faahfaahinta.",
    mogadishu: "Premier Bank Branch Locator wuxuu hayaa branches ku yaal Mogadishu/Banaadir: Bakaaro, Zoobe (Km5), Taleex, Huriwa, Suuq-Bacaad, Dekadda, Sanca, Bacadlaha, Airport, Hamar-Weyne, Dahablaha, Madina, HawlWadag, Airport-road, Ceelasha, Kaaraan, iyo Darusalaam. Goobta ugu dhow si sax ah looma go'aamin karo adigoon bixin goobtaada; isticmaal Branch Locator-ka si aad khariidadda uga doorato midka kuugu dhow.",
    mogadishuCount: "Branch Locator-ka project-ka wuxuu hayaa 17 branch entries oo Mogadishu/Banaadir ah: Bakaaro, Zoobe (Km5), Taleex, Huriwa, Suuq-Bacaad, Dekadda, Sanca, Bacadlaha, Airport, Hamar-Weyne, Dahablaha, Madina, HawlWadag, Airport-road, Ceelasha, Kaaraan, iyo Darusalaam.",
  },
  en: {
    mastercard: "The Premier Bank website presents Platinum, Corporate, and World Elite Mastercard options, with worldwide Mastercard acceptance and card-specific benefits. The application process, fees, limits, and eligibility are not published on the website; please contact Premier Bank for those details.",
    onlineCard: "The website states that Premier Bank Mastercard can be used for purchases and payments where Mastercard is accepted. It does not confirm specific merchants such as Amazon or Alibaba, fees, or limits. Please verify your service and the merchant before payment.",
    hours: "Premier Bank's Branch Locator lists branch hours as 7:30 AM – 5:00 PM. Hours may vary by branch, so please confirm through the Branch Locator or Premier Bank before visiting.",
    financing: "Yes. The Premier Bank website lists Auto Finance, Land Finance, and Business Financing. It does not publish rates, fees, or approval requirements; please contact Premier Bank for details.",
    mogadishu: "Premier Bank's Branch Locator contains branches in Mogadishu/Banaadir: Bakaaro, Zoobe (Km5), Taleex, Huriwa, Suuq-Bacaad, Dekadda, Sanca, Bacadlaha, Airport, Hamar-Weyne, Dahablaha, Madina, HawlWadag, Airport-road, Ceelasha, Kaaraan, and Darusalaam. The closest branch cannot be determined without your exact location; use Branch Locator to choose one on the map.",
    mogadishuCount: "The Branch Locator data in this project contains 17 branch entries for Mogadishu/Banaadir: Bakaaro, Zoobe (Km5), Taleex, Huriwa, Suuq-Bacaad, Dekadda, Sanca, Bacadlaha, Airport, Hamar-Weyne, Dahablaha, Madina, HawlWadag, Airport-road, Ceelasha, Kaaraan, and Darusalaam.",
  },
  sw: { mastercard: "Tovuti ya Premier Bank inaonyesha Platinum, Corporate na World Elite Mastercard. Maelezo ya maombi, ada, viwango na vigezo hayajachapishwa; tafadhali wasiliana na Premier Bank.", onlineCard: "Tovuti inaeleza kuwa Premier Bank Mastercard inaweza kutumika kwa malipo mahali Mastercard inakubaliwa. Haithibitishi wauzaji mahususi, ada au viwango.", hours: "Branch Locator ya Premier Bank inaorodhesha saa za matawi kuwa 7:30 AM – 5:00 PM. Tafadhali thibitisha tawi husika kabla ya kutembelea.", financing: "Ndiyo. Tovuti inaorodhesha Auto Finance, Land Finance na Business Financing. Kwa rates, ada au vigezo, wasiliana na Premier Bank.", mogadishu: "Premier Bank ina matawi yaliyoorodheshwa Mogadishu/Banaadir. Tumia Branch Locator kuchagua tawi lililo karibu nawe kwenye ramani.", mogadishuCount: "Data ya Branch Locator katika project hii ina entries 17 za matawi Mogadishu/Banaadir." },
  am: { mastercard: "የPremier Bank ድህረ ገጽ Platinum፣ Corporate እና World Elite Mastercardን ያሳያል። ለማመልከቻ፣ ክፍያ እና ብቁነት Premier Bankን ያነጋግሩ።", onlineCard: "የPremier Bank Mastercard በMastercard ተቀባይነት ባላቸው ቦታዎች ለክፍያ መጠቀም እንደሚቻል ድህረ ገጹ ይጠቅሳል።", hours: "Branch Locator የቅርንጫፍ ሰዓቶችን 7:30 AM – 5:00 PM ብሎ ይዘረዝራል። ከመጎብኘትዎ በፊት ያረጋግጡ።", financing: "Premier Bank በድህረ ገጹ Auto Finance፣ Land Finance እና Business Financing ይዘረዝራል።", mogadishu: "Premier Bank በMogadishu/Banaadir ውስጥ የተዘረዘሩ ቅርንጫፎች አሉት። Branch Locatorን ይጠቀሙ።", mogadishuCount: "በዚህ project ያለው Branch Locator data ለMogadishu/Banaadir 17 የቅርንጫፍ entries ይዟል።" },
  zh: { mastercard: "Premier Bank 网站列出 Platinum、Corporate 和 World Elite Mastercard。申请、费用和资格详情请联系 Premier Bank。", onlineCard: "网站说明 Premier Bank Mastercard 可在接受 Mastercard 的地方用于支付，但未确认特定商户、费用或限额。", hours: "Branch Locator 列出的营业时间为 7:30 AM – 5:00 PM。访问前请确认具体分行。", financing: "Premier Bank 网站列出 Auto Finance、Land Finance 和 Business Financing。", mogadishu: "Premier Bank 在 Mogadishu/Banaadir 有已列出的分行。请使用 Branch Locator 在地图上选择合适分行。", mogadishuCount: "本项目中的 Branch Locator 数据包含 Mogadishu/Banaadir 的 17 个分行条目。" },
  tr: { mastercard: "Premier Bank web sitesi Platinum, Corporate ve World Elite Mastercard seçeneklerini listeler. Başvuru, ücret ve uygunluk ayrıntıları için Premier Bank ile iletişime geçin.", onlineCard: "Web sitesi, Premier Bank Mastercard'ın Mastercard kabul edilen yerlerde ödeme için kullanılabileceğini belirtir; belirli satıcıları, ücretleri veya limitleri doğrulamaz.", hours: "Branch Locator şube saatlerini 7:30 AM – 5:00 PM olarak listeler. Ziyaret etmeden önce ilgili şubeyle teyit edin.", financing: "Premier Bank web sitesi Auto Finance, Land Finance ve Business Financing hizmetlerini listeler.", mogadishu: "Premier Bank'in Mogadishu/Banaadir'de listelenmiş şubeleri vardır. Haritada uygun şubeyi seçmek için Branch Locator'ı kullanın.", mogadishuCount: "Bu project içindeki Branch Locator verisi Mogadishu/Banaadir için 17 şube kaydı içerir." },
};

// Customer-facing service answers use an agent voice.  The larger knowledge
// base remains available to the model, while these verified common answers are
// kept direct, concise, and consistent in every supported language.
const agentServiceTranslations: Record<ChatLanguage, { current: string; atm: string; mastercard: string; financing: string; agency: string; swift: string }> = {
  so: {
    current: "Personal Current Account waa akoon dabacsan oo kuu fududeynaya bangiga maalinlaha ah, lacag-bixinno sahlan, iyo maarayn dhaqaale oo wanaagsan. Faahfaahinta khidmadaha, hadhaaga, xuduudaha, ama shuruudaha ansixinta hadda ma hayo. Fadlan nala soo xiriir si aan kuu siino macluumaad dheeraad ah.",
    atm: "ATM Banking wuxuu kuu sahlayaa inaad lacag kala baxdo, hubiso balance-kaaga, oo aad aragto mini-statement ATM-yada la heli karo. Si aad u xaqiijiso saacadaha ama helitaanka ATM gaar ah, isticmaal Branch Locator ama nala soo xiriir.",
    mastercard: "Premier Mastercard waa kaar kuu sahlaya lacag-bixinnada online-ka, POS-ka, safarrada, booking-yada, iyo adeegyada caalamiga ah ee aqbala Mastercard. Waxaa lagu heli karaa $2, waxaana online-ka iyo POS-ka loogu adeegsan karaa khidmad la'aan.",
    financing: "Haa, Premier Bank waxay bixisaa Auto Finance, Land Finance, iyo Business Financing si ay kaaga taageerto yoolalkaaga gaarka ah ama ganacsi. Faahfaahinta rates-ka, khidmadaha, iyo shuruudaha ansixinta hadda ma hayo. Fadlan nala soo xiriir si aan kuu siino macluumaad dheeraad ah.",
    agency: "Agency Banking wuxuu kuu sahlayaa inaad deposits, withdrawals, iyo baahiyaha bangiga ee muhiimka ah ka hesho agents-ka Premier Bank ee kuu dhow, xitaa wixii ka baxsan saacadaha bangiga caadiga ah.",
    swift: "SWIFT waa adeeg Premier Bank kaa caawinaya dirista iyo qaadashada lacagaha caalamiga ah si ammaan ah iyadoo loo marayo bangiyada adduunka.",
  },
  en: {
    current: "A Personal Current Account is a flexible account for everyday banking, convenient payments, and greater control of your finances. I do not have the specific fees, balances, limits, or approval requirements at the moment. Please contact us for more information.",
    atm: "ATM Banking lets you withdraw cash, check your balance, and view a mini-statement at available ATMs. For a specific ATM's hours or availability, use the Branch Locator or contact us.",
    mastercard: "Premier Mastercard makes it easy to pay online, at POS locations, for travel and bookings, and with international services that accept Mastercard. It is available for $2, and online and POS payments are fee-free.",
    financing: "Yes. Premier Bank provides Auto Finance, Land Finance, and Business Financing to support personal and business goals. I do not have the specific rates, fees, or approval requirements at the moment. Please contact us for more information.",
    agency: "Agency Banking gives you convenient access to essential banking services through trusted Premier Bank agents close to you, including deposits and withdrawals beyond traditional banking hours.",
    swift: "SWIFT is a Premier Bank service that helps you send and receive international payments securely through banks around the world.",
  },
  sw: {
    current: "Personal Current Account ni akaunti inayonyumbulika kwa benki za kila siku, malipo rahisi na udhibiti zaidi wa fedha zako. Sina maelezo mahsusi ya ada, salio, viwango au idhini kwa sasa. Tafadhali wasiliana nasi kwa maelezo zaidi.",
    atm: "ATM Banking hukuwezesha kutoa pesa, kuangalia salio na kuona mini-statement kwenye ATM zinazopatikana. Kwa saa au upatikanaji wa ATM maalum, tumia Branch Locator au wasiliana nasi.",
    mastercard: "Premier Mastercard ina chaguo za Platinum, Corporate na World Elite, zenye ukubalifu wa Mastercard duniani na manufaa kulingana na kadi. Sina maelezo mahsusi ya maombi, ada, viwango au vigezo kwa sasa. Tafadhali wasiliana nasi kwa maelezo zaidi.",
    financing: "Ndiyo. Premier Bank hutoa Auto Finance, Land Finance na Business Financing kusaidia malengo ya binafsi na biashara. Sina maelezo mahsusi ya rates, ada au masharti ya idhini kwa sasa. Tafadhali wasiliana nasi kwa maelezo zaidi.",
    agency: "Agency Banking hukupa ufikiaji rahisi wa huduma muhimu za benki kupitia mawakala wa Premier Bank walio karibu nawe, ikijumuisha kuweka na kutoa pesa hata nje ya saa za kawaida za benki.",
    swift: "SWIFT ni huduma ya Premier Bank inayokusaidia kutuma na kupokea malipo ya kimataifa kwa usalama kupitia benki duniani kote.",
  },
  am: {
    current: "Personal Current Account ለዕለታዊ ባንክ አገልግሎት፣ ምቹ ክፍያዎች እና የተሻለ የገንዘብ ቁጥጥር የተዘጋጀ ተለዋዋጭ ሂሳብ ነው። የተወሰኑ ክፍያዎችን፣ ገደቦችን ወይም የፈቃድ መስፈርቶችን በአሁኑ ጊዜ የለኝም። ለተጨማሪ መረጃ እባክዎ ያነጋግሩን።",
    atm: "ATM Banking ገንዘብ ለማውጣት፣ ቀሪ ሂሳብ ለማየት እና mini-statement ለማየት ያስችልዎታል። የተወሰነ ATM ሰዓት ወይም ተገኝነት ለማረጋገጥ Branch Locatorን ይጠቀሙ ወይም ያነጋግሩን።",
    mastercard: "Premier Mastercard የPlatinum፣ Corporate እና World Elite አማራጮችን ያካትታል፣ በዓለም አቀፍ የMastercard ተቀባይነት እና በካርዱ ላይ የተመሠረቱ ጥቅሞች ይሰጣል። ለተጨማሪ መረጃ እባክዎ ያነጋግሩን።",
    financing: "አዎ። Premier Bank ለግል እና ለንግድ ግቦች Auto Finance፣ Land Finance እና Business Financing ይሰጣል። ለተጨማሪ መረጃ እባክዎ ያነጋግሩን።",
    agency: "Agency Banking በአቅራቢያዎ ባሉ የPremier Bank ታማኝ ወኪሎች አማካኝነት ተቀማጭ እና ገንዘብ ማውጣትን ጨምሮ አስፈላጊ የባንክ አገልግሎቶችን በቀላሉ ያገኛሉ።",
    swift: "SWIFT በዓለም ዙሪያ ባሉ ባንኮች በኩል ዓለም አቀፍ ክፍያዎችን በደህና እንዲልኩ እና እንዲቀበሉ የሚረዳ የPremier Bank አገልግሎት ነው።",
  },
  zh: {
    current: "Personal Current Account 是一款灵活的日常账户，可用于便捷付款并更好地管理您的资金。目前我没有具体的费用、余额、限额或审批要求；如需更多信息，请联系我们。",
    atm: "ATM Banking 可让您在可用 ATM 取现、查询余额和查看迷你对账单。如需确认特定 ATM 的营业时间或可用性，请使用 Branch Locator 或联系我们。",
    mastercard: "Premier Mastercard 包括 Platinum、Corporate 和 World Elite 选项，提供全球 Mastercard 受理及与卡种相关的权益。目前我没有具体的申请、费用、限额或资格详情；如需更多信息，请联系我们。",
    financing: "是的。Premier Bank 提供 Auto Finance、Land Finance 和 Business Financing，支持个人和企业目标。目前我没有具体的利率、费用或审批要求；如需更多信息，请联系我们。",
    agency: "Agency Banking 通过您附近值得信赖的 Premier Bank 代理人，为您提供存款、取款等基本银行服务，也可覆盖传统营业时间以外的需求。",
    swift: "SWIFT 是 Premier Bank 的服务，可帮助您通过全球银行安全地发送和接收国际付款。",
  },
  tr: {
    current: "Personal Current Account; günlük bankacılık, kolay ödemeler ve finansınız üzerinde daha fazla kontrol için esnek bir hesaptır. Şu anda belirli ücret, bakiye, limit veya onay koşullarına sahip değilim. Daha fazla bilgi için lütfen bizimle iletişime geçin.",
    atm: "ATM Banking; mevcut ATM'lerde para çekmenizi, bakiye sorgulamanızı ve mini ekstre görmenizi sağlar. Belirli bir ATM'nin saatleri veya kullanılabilirliği için Branch Locator'ı kullanın ya da bizimle iletişime geçin.",
    mastercard: "Premier Mastercard; Platinum, Corporate ve World Elite seçeneklerini içerir; dünya genelinde Mastercard kabulü ve karta bağlı avantajlar sunar. Daha fazla bilgi için lütfen bizimle iletişime geçin.",
    financing: "Evet. Premier Bank, kişisel ve ticari hedefleri desteklemek için Auto Finance, Land Finance ve Business Financing sunar. Daha fazla bilgi için lütfen bizimle iletişime geçin.",
    agency: "Agency Banking, yakınınızdaki güvenilir Premier Bank acenteleri üzerinden para yatırma ve çekme dahil temel bankacılık hizmetlerine kolay erişim sağlar.",
    swift: "SWIFT, dünya genelindeki bankalar aracılığıyla uluslararası ödemeleri güvenle göndermenize ve almanıza yardımcı olan Premier Bank hizmetidir.",
  },
};

const accountOpeningTranslations: Record<ChatLanguage, string> = {
  so: "Si aad Premier Bank Personal Current Account u furato, waxaa waajib ah National ID ama Passport aan dhacsanayn, Work Permit sax ah haddii aad tahay non-citizen, iyo laba passport-size photos.",
  en: "To open a Premier Bank Personal Current Account, you need a valid National ID or Passport, a valid Work Permit if you are a non-citizen, and two passport-size photos.",
  sw: "Ili kufungua Premier Bank Personal Current Account, unahitaji National ID au Passport halali, Work Permit halali ikiwa wewe si raia, na picha mbili za passport-size.",
  am: "Premier Bank Personal Current Account ለመክፈት ትክክለኛ National ID ወይም Passport፣ ዜጋ ካልሆኑ ትክክለኛ Work Permit፣ እና ሁለት passport-size ፎቶዎች ያስፈልጋሉ።",
  zh: "开设 Premier Bank Personal Current Account 需要有效的 National ID 或 Passport；非公民需要有效的 Work Permit；并需要两张 passport-size 照片。",
  tr: "Premier Bank Personal Current Account açmak için geçerli National ID veya Passport, vatandaş değilseniz geçerli Work Permit ve iki passport-size fotoğraf gerekir.",
};

const localized: Record<ChatLanguage, { greeting: string; wellbeing: string; capabilities: string; contact: string; branch: string; fallback: string; security: string; acknowledgement: string }> = {
  so: {
    greeting: "Wcs 👋 Ku soo dhawoow Premier Bank. Maxaan kaa caawin karaa maanta?",
    wellbeing: "Waan fiicanahay, mahadsanid 😊 Adigana maxaan kaa caawin karaa?",
    capabilities: "Waxaan kaa caawin karaa macluumaadka Premier Bank sida Current Account, Diaspora Banking, Premier Wallet, cards, ATM-yada, branches, digital banking, iyo adeegyo kale.",
    contact: "Waxaad Premier Bank kala xiriiri kartaa +252 61 7771000, +252 63 3800017, ama info@premierbank.so.",
    branch: "Isticmaal Branch Locator-ka Premier Bank si aad ugu raadiso branch magaca, magaalada, ama goobta; waxaadna ka arki kartaa khariidadda iyo directions.",
    fallback: "Ma hayo macluumaad rasmi ah oo igu filan inaan si sax ah uga jawaabo. Fadlan la xiriir Premier Bank support.",
    security: "Amnigaaga awgiis, ha ku wadaagin password, PIN, OTP, CVV, card number, ama xog bangi oo sir ah halkan. Fadlan la xiriir Premier Bank adigoo maraya kanaal rasmi ah.",
    acknowledgement: "Luqadda aad dooratay waa shaqaynaysaa. Maxaan kaa caawin karaa?",
  },
  en: {
    greeting: "Welcome to Premier Bank 👋 How can I help you today?",
    wellbeing: "I'm well, thank you 😊 How can I help you today?",
    capabilities: "I can help with Premier Bank information such as Current Account, Diaspora Banking, Premier Wallet, cards, ATMs, branches, digital banking, and other services.",
    contact: "You can contact Premier Bank at +252 61 7771000, +252 63 3800017, or info@premierbank.so.",
    branch: "Use Premier Bank's Branch Locator to search by branch name, city, or location, view it on the map, and get directions.",
    fallback: "I don't have enough official information to answer that accurately. Please contact Premier Bank support.",
    security: "For your security, do not share passwords, PINs, OTPs, CVV codes, card numbers, or other sensitive banking information here. Please contact Premier Bank through an official channel.",
    acknowledgement: "Your selected language is active. How can I help you?",
  },
  sw: {
    greeting: "Karibu Premier Bank 👋 Ninawezaje kukusaidia leo?",
    wellbeing: "Niko vizuri, asante 😊 Ninawezaje kukusaidia leo?",
    capabilities: "Ninaweza kusaidia kwa taarifa za Premier Bank kama Current Account, Diaspora Banking, Premier Wallet, kadi, ATM, matawi, huduma za kidijitali na huduma nyingine.",
    contact: "Unaweza kuwasiliana na Premier Bank kupitia +252 61 7771000, +252 63 3800017, au info@premierbank.so.",
    branch: "Tumia Branch Locator ya Premier Bank kutafuta tawi kwa jina, jiji au eneo, kuliona kwenye ramani na kupata maelekezo.",
    fallback: "Sina taarifa rasmi za kutosha kujibu hilo kwa usahihi. Tafadhali wasiliana na Premier Bank support.",
    security: "Kwa usalama wako, usishiriki password, PIN, OTP, CVV, card number au taarifa nyingine nyeti za benki hapa. Tafadhali wasiliana na Premier Bank kupitia njia rasmi.",
    acknowledgement: "Lugha uliyochagua inatumika. Ninaweza kukusaidiaje?",
  },
  am: { greeting: "ወደ Premier Bank እንኳን በደህና መጡ 👋 እንዴት ልርዳዎ?", wellbeing: "ደህና ነኝ፣ እናመሰግናለን 😊 እንዴት ልርዳዎ?", capabilities: "ስለ Current Account፣ Diaspora Banking፣ Premier Wallet፣ ካርዶች፣ ATM እና ቅርንጫፎች የPremier Bank መረጃ ልረዳዎ እችላለሁ።", contact: "Premier Bankን +252 61 7771000፣ +252 63 3800017 ወይም info@premierbank.so ማነጋገር ይችላሉ።", branch: "ቅርንጫፍ ለመፈለግ፣ ካርታውን ለማየት እና መመሪያ ለማግኘት Premier Bank Branch Locatorን ይጠቀሙ።", fallback: "በትክክል ለመመለስ በቂ ኦፊሴላዊ መረጃ የለኝም። እባክዎ Premier Bank supportን ያነጋግሩ።", security: "ለደህንነትዎ password፣ PIN፣ OTP፣ CVV፣ card number ወይም ሌላ ሚስጥራዊ የባንክ መረጃ እዚህ አያጋሩ።", acknowledgement: "የመረጡት ቋንቋ ንቁ ነው። እንዴት ልርዳዎ?" },
  zh: { greeting: "欢迎来到 Premier Bank 👋 我今天可以如何帮助您？", wellbeing: "我很好，谢谢您 😊 我今天可以如何帮助您？", capabilities: "我可以协助您了解 Premier Bank 的 Current Account、Diaspora Banking、Premier Wallet、银行卡、ATM、分行和数字银行服务。", contact: "您可以通过 +252 61 7771000、+252 63 3800017 或 info@premierbank.so 联系 Premier Bank。", branch: "请使用 Premier Bank Branch Locator 按分行名称、城市或地点搜索，并查看地图和路线。", fallback: "我没有足够的官方信息来准确回答。请联系 Premier Bank support。", security: "为了您的安全，请不要在此分享 password、PIN、OTP、CVV、card number 或其他敏感银行信息。", acknowledgement: "您选择的语言已生效。我可以如何帮助您？" },
  tr: { greeting: "Premier Bank'e hoş geldiniz 👋 Size bugün nasıl yardımcı olabilirim?", wellbeing: "İyiyim, teşekkür ederim 😊 Size bugün nasıl yardımcı olabilirim?", capabilities: "Current Account, Diaspora Banking, Premier Wallet, kartlar, ATM'ler, şubeler ve dijital bankacılık hakkında Premier Bank bilgileriyle yardımcı olabilirim.", contact: "Premier Bank ile +252 61 7771000, +252 63 3800017 veya info@premierbank.so üzerinden iletişime geçebilirsiniz.", branch: "Şube adı, şehir veya konuma göre aramak, haritada görmek ve yol tarifi almak için Premier Bank Branch Locator'ı kullanın.", fallback: "Bunu doğru yanıtlamak için yeterli resmi bilgim yok. Lütfen Premier Bank support ile iletişime geçin.", security: "Güvenliğiniz için password, PIN, OTP, CVV, card number veya diğer hassas bankacılık bilgilerini burada paylaşmayın.", acknowledgement: "Seçtiğiniz dil etkin. Size nasıl yardımcı olabilirim?" },
};

function normalizeQuestion(question: string) {
  // Preserve non-Latin scripts so selected-language questions can still be
  // matched locally instead of needlessly calling the API.
  return question
    .toLocaleLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function includesAny(question: string, phrases: readonly string[]) {
  const normalized = normalizeQuestion(question);
  return phrases.some((phrase) => normalized.includes(normalizeQuestion(phrase)));
}

function startsWithAnyPhrase(question: string, phrases: readonly string[]) {
  const normalized = normalizeQuestion(question);
  return phrases.some((phrase) => {
    const candidate = normalizeQuestion(phrase);
    return normalized === candidate || normalized.startsWith(`${candidate} `);
  });
}

function isBranchLocationQuestion(question: string) {
  const normalized = normalizeQuestion(question);
  const aliases = [
    "branch", "branches", "location", "nearest", "office", "xarun", "xarumo", "xarumaha", "xarunta", "laan", "laanta", "laamaha", "goob", "goobta", "meesha", "xaggee", "halkee", "magaalada", "degmadan", "halkan ma ku leedihiin",
    "tawi", "matawi", "eneo", "shule", "şube", "sube", "şubeler", "subeler", "ቅርንጫፍ", "分行", "网点",
  ];
  return aliases.some((word) => normalized.includes(normalizeQuestion(word)));
}

function isCardlessWithdrawalQuestion(question: string) {
  const normalized = normalizeQuestion(question);
  const mentionsCard = ["cardless", "without my card", "without a card", "card la", "anigoon card", "cardkayga", "card haysan", "card wadan", "card laan", "bila kadi", "kart olmadan", "没有卡", "ያለ ካርድ"].some((word) => normalized.includes(normalizeQuestion(word)));
  const mentionsWithdrawal = ["atm", "withdraw", "cash", "lacag", "bixi", "toa pesa", "para çek", "取现", "ገንዘብ"].some((word) => normalized.includes(normalizeQuestion(word)));
  return mentionsCard && mentionsWithdrawal;
}

function isAtmQuestion(question: string) {
  return includesAny(question, ["atm", "cash machine", "bixinta lacagta"]);
}

function isMastercardQuestion(question: string) {
  const normalized = normalizeQuestion(question);
  const compact = normalized.replace(/\s+/g, "");
  if (["mastercard", "mastarcard", "masterkard", "premiercard", "cardpremier"].some((word) => compact.includes(word))) return true;
  return normalized.includes("mastercard") || normalized.includes("master card") || normalized.includes("万事达") || (normalized.includes("card") && ["rabaa", "raba", "doonayaa", "want", "get", "nataka", "istiyorum"].some((word) => normalized.includes(word)));
}

function isMastercardPriceQuestion(question: string) {
  return isMastercardQuestion(question) && includesAny(question, ["meeqa", "imisa", "qiimo", "price", "cost", "dollar", "usd", "lacag intee", "bei", "fiyat"]);
}

function isMastercardTravelBookingQuestion(question: string) {
  return includesAny(question, ["booking", "booking.com", "trip.com", "hotel booking", "ticket", "safar", "travel", "trip", "duulimaad", "flight", "reserve"]);
}

function isOnlineCardQuestion(question: string) {
  const normalized = normalizeQuestion(question);
  return ["online", "amazon", "alibaba", "ecommerce", "e commerce", "shop", "mtandaoni", "çevrimiçi", "网上"].some((word) => normalized.includes(normalizeQuestion(word))) && ["card", "mastercard", "master card", "kadi", "kart", "万事达"].some((word) => normalized.includes(normalizeQuestion(word)));
}

function isWorkingHoursQuestion(question: string) {
  const normalized = normalizeQuestion(question);
  return ["waqti", "saacad", "shaqey", "shaqq", "furmaan", "goorma", "working hours", "when are you open", "open hours", "opening hours", "masaa", "saat", "çalışma", "营业时间", "ሰዓት"].some((word) => normalized.includes(normalizeQuestion(word)));
}

function isFinancingQuestion(question: string) {
  const normalized = normalizeQuestion(question);
  return ["maalgelin", "financing", "finance", "investment", "uwekezaji", "finansman", "融资", "ፋይናንስ"].some((word) => normalized.includes(normalizeQuestion(word)));
}

function isSwiftQuestion(question: string) {
  return includesAny(question, ["swift", "international payment", "international transfer", "lacag caalami", "hamisho ya kimataifa", "uluslararası ödeme", "国际付款", "ዓለም አቀፍ ክፍያ"]);
}

function isAgencyBankingQuestion(question: string) {
  return includesAny(question, ["agency banking", "banking agent", "agent banking", "wakaaladda bangiga", "wakala wa benki", "banka acentesi", "银行代理", "የባንክ ወኪል"]);
}

function isMogadishuQuestion(question: string) {
  const normalized = normalizeQuestion(question);
  return ["muqdisho", "mogadishu", "banadir", "banaadir"].some((word) => normalized.includes(word));
}

function isBranchCountQuestion(question: string) {
  const normalized = normalizeQuestion(question);
  return ["meeqa", "imisa", "how many", "count", "number of branches", "ngapi", "kaç", "多少", "ስንት"].some((word) => normalized.includes(normalizeQuestion(word)));
}

function isNearestBranchQuestion(question: string) {
  return includesAny(question, ["near me", "nearest", "iigu dhow", "igu dhow", "xarunta iigu dhow", "branch ka iigu dhow", "tawi lililo karibu", "en yakın", "最近的分行", "ቅርብ ቅርንጫፍ"]);
}

function isAccountQuestion(question: string) {
  return includesAny(question, ["current account", "account", "akoon", "akoont", "akaunti", "hesap", "账户", "ሂሳብ"]);
}

function isOpeningAccountQuestion(question: string) {
  return includesAny(question, ["open", "opening", "furan", "furo", "furtaa", "furashada", "fur", "fungua", "hesap aç", "开户", "መክፈት"]);
}

function isWalletQuestion(question: string) {
  return includesAny(question, ["premier wallet", "primier wallet", "premer wallet", "premier walet", "premier walle", "wallet", "walet", "walle", "walt", "airtime", "bill payment", "biil", "lacag dir", "send money", "huduma ya simu", "cüzdan", "钱包", "ዋሌት"]);
}

function isAccountManagementQuestion(question: string) {
  return includesAny(question, ["statement", "statements", "transaction history", "transactions", "balance", "account to account", "account-to-account", "transfer between accounts", "mobile account", "mobile banking", "manage my account", "maaree akoon", "bayaanka", "xisaab celin", "miamala", "salio", "taarifa ya akaunti", "hesap özeti", "işlem geçmişi", "账户余额", "交易记录", "对账单", "የሂሳብ መግለጫ"]);
}

function isContactQuestion(question: string) {
  return includesAny(question, ["contact", "phone", "email", "number", "xiriir", "kuwasiliana", "nambarka", "numberka", "simu", "mawasiliano", "iletişim", "联系", "ተገናኝ"]);
}

function isAccountTypesQuestion(question: string) {
  return includesAny(question, ["accounts noocee", "akoonada noocee", "akoon noocee", "what accounts", "account types", "personal accounts", "business accounts", "saving accounts", "aina za akaunti", "hesap türleri", "账户类型", "የሂሳብ አይነቶች"]);
}

function isSpecificAccountQuestion(question: string) {
  return includesAny(question, ["salary account", "student account", "student savings", "hajj", "umrah", "umma account", "business current", "business account", "corporate current", "corporate account", "saving account", "savings account"]);
}

function isVisaQuestion(question: string) {
  return includesAny(question, ["visa card", "visa kaar", "visa kadi", "visa kart", "visa 卡", "ቪዛ ካርድ"]);
}

function isTransferFeeQuestion(question: string) {
  return includesAny(question, ["transfer fee", "money transfer fee", "khidmad", "fee ga", "fee lacag", "ada ya kutuma", "transfer ücreti", "转账费用", "የዝውውር ክፍያ"]);
}

function isInternationalTransferQuestion(question: string) {
  return includesAny(question, ["international transfer", "international payment", "send money abroad", "receive money abroad", "china", "shiinaha", "shiinaha", "lacag u diri", "receive international", "tuma pesa china", "uluslararası transfer", "中国", "国际转账", "ዓለም አቀፍ ማስተላለፍ"]);
}

function isInternationalBankingQuestion(question: string) {
  return includesAny(question, ["international banking", "international services", "foreign exchange", "foreign currency", "banking abroad", "bangiga caalamiga", "huduma za kimataifa", "uluslararası bankacılık", "国际银行", "ዓለም አቀፍ ባንክ"]);
}

function isBankingServicesQuestion(question: string) {
  return includesAny(question, ["banking services", "what services", "services do you offer", "adeegyada bangiga", "adeegyo maxaad", "huduma za benki", "bankacılık hizmetleri", "银行服务", "የባንክ አገልግሎቶች"]);
}

function isOnlineShoppingQuestion(question: string) {
  return includesAny(question, ["online shopping", "online wax", "amazon", "alibaba", "ecommerce", "e commerce", "online purchase", "internet purchase", "mtandaoni", "çevrimiçi", "网上购物"]);
}

function isWalletFeatureQuestion(question: string) {
  return isWalletQuestion(question) && includesAny(question, ["send", "dir", "transfer", "bill", "biil", "airtime", "statement", "balance", "mobile", "account manage", "maaree", "simamia", "gönder", "账单", "转账", "发送"]);
}

function isDigitalSubscriptionPaymentQuestion(question: string) {
  return includesAny(question, ["chatgpt", "chat gpt", "subscription", "digital subscription", "online payment sideen", "online wax kaga iibsado"]);
}

function isVirtualCardQuestion(question: string) {
  if (includesAny(question, ["virtual", "vertual", "virtualcard", "v card", "online card"])) return true;
  return includesAny(question, ["virtual card", "virtual kaar", "digital card", "kaar dijitaal", "kadi ya kidijitali", "sanal kart", "虚拟卡", "ዲጂታል ካርድ"]);
}

function isPremierTapQuestion(question: string) {
  return includesAny(question, ["premier tap", "tap to pay", "contactless", "ring payment", "payment ring", "ring ma ku", "phone ma ku bixin", "pay with phone", "tap payment", "smartwatch", "smart watch", "saacad ma ku", "watch payment", "ookiyaale", "glasses payment", "eyewear", "wristband", "bracelet", "key fob", "sticker", "nfc", "malipo ya kugusa", "temassız", "非接触式", "ያለ ንክኪ"]);
}

function isWalletDownloadQuestion(question: string) {
  const asksForApp = includesAny(question, ["app ma", "app ma leedihiin", "premier bank app", "mobile app"]);
  return (isWalletQuestion(question) || asksForApp) && includesAny(question, ["download", "soo deg", "soo dags", "app ma", "mobile app", "google play", "app store", "pakua", "indir", "下载", "መተግበሪያ"]);
}

function isWalletRegistrationQuestion(question: string) {
  return isWalletQuestion(question) && includesAny(question, ["register", "registration", "sign up", "diiwaan", "iska diiwaan", "furto", "create wallet", "jisajili", "kayıt", "注册", "መመዝገብ"]);
}

function isWalletBillPaymentQuestion(question: string) {
  return isWalletQuestion(question) && includesAny(question, ["electricity", "koronto", "bill payment", "biil", "meter", "bill", "lipa bili", "umeme", "fatura", "电费", "电表", "የኤሌክትሪክ"]);
}

function isPaymentGatewayQuestion(question: string) {
  return includesAny(question, ["payment gateway", "premier gateway", "mpgs", "merchant payment", "business online payment", "ganacsi online lacag", "ganacsigayga", "online lacag ma ku qaadan", "customers dibadda", "customer dibadda", "e commerce business", "ecommerce business", "malipo ya biashara", "ödeme ağ geçidi", "支付网关", "የክፍያ መተላለፊያ"]);
}

function isJabaneAtmQuestion(question: string) {
  return isAtmQuestion(question) && includesAny(question, ["jabane", "hargeisa", "hargaysa", "ramadan"]);
}

function isAtmCashDepositQuestion(question: string) {
  return isAtmQuestion(question) && includesAny(question, ["cash deposit", "deposit cash", "lacag ku shuban", "lacag ma ku shuban", "ku shubo atm", "weka pesa", "para yatır", "现金存款", "ገንዘብ ማስገባት"]);
}

function isWalletTopUpQuestion(question: string) {
  return isWalletQuestion(question) && includesAny(question, ["top up", "topup", "wallet lacag ku shub", "wallet ugu shub", "lacag ugu shub", "ku shubaa", "recharge wallet", "ongeza pesa", "para yükle", "充值"]);
}

function isWalletWithdrawalQuestion(question: string) {
  return isWalletQuestion(question) && includesAny(question, ["withdraw", "withdrawal", "kala bixi", "uga bax", "uga saara", "wallet lacag ma kala", "cash out", "toa pesa", "para çek", "取现", "ገንዘብ ማውጣት"]);
}

function isWalletExchangeQuestion(question: string) {
  return (isWalletQuestion(question) || includesAny(question, ["currency conversion", "currency exchange"])) && includesAny(question, ["exchange", "currency", "sarif", "sarrif", "usd", "shilling", "lacag badal", "kubadilisha fedha", "döviz", "货币兑换", "ምንዛሬ"]);
}

function isWalletTransferQuestion(question: string) {
  return !isWalletSendQuestion(question) && isWalletQuestion(question) && includesAny(question, ["send money", "send", "dir", "transfer", "lacag uga dira", "lacag u dira", "wallet to wallet", "tuma pesa", "gönder", "转账", "发送"]);
}

function isWalletTvBillQuestion(question: string) {
  return includesAny(question, ["tv bill", "tv-ga lacag", "decoder", "television bill", "tv payment"]);
}

function isWalletEducationBillQuestion(question: string) {
  if (includesAny(question, ["jaamacadda lacag", "tuition fee", "student payment", "university payment", "university ma ku shaqeeyaa", "guriga jooga jaamacadda"])) return true;
  return includesAny(question, ["school fee", "university fee", "jaamacad lacag", "school lacag", "student fee", "education payment", "dugsi lacag", "ada ya chuo", "大学费用", "የዩኒቨርሲቲ ክፍያ"]);
}

function isSosSupportDetailQuestion(question: string) {
  return includesAny(question, ["sos somalia", "sos soomaaliya", "sos children", "sos childrens", "sos village", "sos caruur", "carruurta sos"]);
}

function isSomaliTechAwardDetailQuestion(question: string) {
  return includesAny(question, ["somali tech awards", "digital banking award", "digital wallet advancement", "cash deposit machine award"]);
}

function isSafariBoramaAtmQuestion(question: string) {
  return isAtmQuestion(question) && includesAny(question, ["safari resort", "borama", "boorama"]);
}

function isAtmUsageQuestion(question: string) {
  return isAtmQuestion(question) && includesAny(question, ["sideen u isticmaalaa", "sidee u isticmaalaa", "how to use", "luqadee", "language", "pin ma bedeli", "balance ma hubin"]);
}

function isNamedPosMerchantQuestion(question: string) {
  return includesAny(question, ["hyderabad biryani", "al jazeera hotel", "jabir plaza"]);
}

function isWalletNiraQuestion(question: string) {
  return includesAny(question, ["nira", "huubiye", "ekyc", "e kyc", "mohamed ali adam", "maxamed cali aadan", "madax premier wallet"]);
}

function isVirtualCardManagementQuestion(question: string) {
  return isVirtualCardQuestion(question) && includesAny(question, ["physical", "physical card", "freeze", "joojin", "spending limit", "xaddid", "card number", "expiry", "cvv", "netflix", "spotify", "google play", "xaggee", "sameeyaa"]);
}

function isWalletEgyptQuestion(question: string) {
  return isWalletSendQuestion(question) && includesAny(question, ["egypt", "masar"]);
}

function isDetailedAwardQuestion(question: string) {
  return includesAny(question, ["outstanding african banking brand", "african banking brand excellence", "alm africa", "african business leadership", "best mobile money app", "somali business awards", "mastercard edge", "wearable commercial launch"]);
}

function isDiasporaAccountDetailQuestion(question: string) {
  return includesAny(question, ["diaspora account", "diaspora banking account", "qurbaha account", "dibadda account", "approved agency", "diaspora team", "diaspora customers"]);
}

function isWalletExtendedServicesQuestion(question: string) {
  return isWalletQuestion(question) && includesAny(question, ["biyaha", "water bill", "health", "caafimaad", "tv", "cable", "qr code", "merchant id", "transaction history", "wallet to bank", "wallet ilaa bank", "wallet to wallet", "wallet lahayn", "aan wallet lahayn"]);
}

function isWalletBalanceQuestion(question: string) {
  return includesAny(question, ["wallet balance", "balance", "balnce", "balans", "haraag", "haraaga", "harageyga", "haraagayga", "lacagta ii jirta", "lacag intee ii jirta", "wallet lacagta ii taal"]);
}

function isWalletHistoryQuestion(question: string) {
  return includesAny(question, ["history", "transaction history", "wallet history", "spending history", "transaction kayga", "transactions kayga", "lacagihii aan diray", "payments kii hore", "lacagtii aan shalay diray", "statement wallet", "kharashkayga"]);
}

function isWalletPinHelpQuestion(question: string) {
  return includesAny(question, ["pin", "mpin", "m pin", "wallet pin", "pin change", "pin cusub", "pin beddel", "pin badal", "password pin", "forgot pin", "ilowday pin", "pin keyga", "code keyga", "reset"]);
}

// Intent: change_mpin. Keep this separate from recovery and general PIN-help
// requests so a customer asking to change an active Wallet MPIN gets the
// verified Change MPIN path rather than a generic security answer.
function isChangeMpinQuestion(question: string) {
  return includesAny(question, [
    "mpin keyga sideen u baddalaa", "mpin keyga sideen u badalaa", "mpin keyga sideen u beddelaa", "mpin keyga sideen u bedelaa",
    "mpin sidee u beddelaa", "mpin sidee u bedelaa", "pin sidee u beddelaa", "pin sidee u bedelaa",
    "mpin change", "change mpin", "change pin", "pin cusub rabaa", "mpin cusub rabaa", "mpin cusub sidee u sameeyaa",
    "code ka wallet sidee u beddelaa", "code ka wallet sidee u bedelaa", "code keyga wallet sidee u beddelaa", "code keyga wallet sidee u bedelaa",
    "pin keyga change garee", "mpin keyga change garee", "mpin beddel", "mpin badal", "sidee pin kale u sameystaa", "sidee pin kale u samaystaa",
    "how do i change my mpin", "how to change mpin", "change my pin", "new mpin", "new wallet pin",
  ]);
}

function isWalletProfilePhotoQuestion(question: string) {
  return isWalletQuestion(question) && includesAny(question, ["profile picture", "profile photo", "profile image", "sawir u saar", "sawirkayga", "photo upload", "profile-ka sawir"]);
}

function isForgotMpinQuestion(question: string) {
  return includesAny(question, ["pin keyga hilmaamay", "pin keyga ayaan hilmaamay", "mpin keyga ayaan hilmaamay", "mpin hilmaamay", "pin ma xasuusto", "forget mpin", "pin iga lumay", "mpin reset", "pin ilaaway", "code ma xasuusto", "waan hilmaamay", "waan illoobay", "code iga lumay"]);
}

function isChangePasswordQuestion(question: string) {
  return includesAny(question, ["password side u badalaa", "password side u bedelaa", "password change", "password cusub", "change password"]);
}

function isForgotPasswordQuestion(question: string) {
  return includesAny(question, ["password hilmaamay", "password ma xasuusto", "forget password", "login password iga lumay", "password reset"]);
}

function isBiometricsQuestion(question: string) {
  return includesAny(question, ["face id", "touch id", "fingerprint", "face ku gal", "biometric", "biometrics"]);
}

function isMyQrQuestion(question: string) {
  return includesAny(question, ["my qr", "qr keyga", "qr code keyga", "qr share", "qr-ga ii sheeg"]);
}

function isAccountBalanceMobileBankingQuestion(question: string) {
  return includesAny(question, ["account balance", "lacagta account", "account intee ku jirta", "haraaga account", "account-ka intee ku jirta"]);
}

function isViewDigitalCardQuestion(question: string) {
  return includesAny(question, ["card xogtiisa", "mastercard details", "digital card xagee", "card number xage", "show digital card"]);
}

function isCardManagementQuestion(question: string) {
  return includesAny(question, ["card block", "card xiro", "unblock", "pin card badal", "card delete", "reset card pin", "card management"]);
}

function isMultipleCardsQuestion(question: string) {
  return includesAny(question, ["cards badan", "card kale xagee", "side card kale", "mastercard kale"]);
}

function isMastercardFundingQuestion(question: string) {
  return isMastercardQuestion(question) && includesAny(question, ["lacag ugu shub", "top up", "fund", "wallet to mastercard", "card balance", "card lacag ugu dara"]);
}

function isVirtualCardFundingQuestion(question: string) {
  return isVirtualCardQuestion(question) && includesAny(question, ["lacag ugu shub", "top up", "fund", "funding"]);
}

function isBankToWalletQuestion(question: string) {
  return isWalletQuestion(question) && includesAny(question, ["bank to wallet", "account to wallet", "account lacag", "bank money", "koontadayda lacagta wallet", "bank-ga wallet"]);
}

function isWalletToBankQuestion(question: string) {
  return isWalletQuestion(question) && includesAny(question, ["wallet to bank", "wallet to account", "wallet ilaa bank", "wallet ilaa account", "wallet lacagta account", "wallet lacag account", "wallet-kayga lacagta bank", "wallet account ugu"]);
}

function isAgentWalletDepositQuestion(question: string) {
  return isWalletQuestion(question) && includesAny(question, ["agent", "wakiil", "cash ayaan hayaa", "cash ah wallet", "agent deposit", "deposit wallet"]);
}

function isWalletMerchantPaymentQuestion(question: string) {
  return includesAny(question, ["merchant", "marchent", "marchant", "ganacsade", "maqaaxi", "restaurant", "dukaan", "shop", "qr", "merchant id"]);
}

function isWalletTransactionProblemQuestion(question: string) {
  return includesAny(question, ["lacagtii ma gaarin", "transfer pending", "transaction failed", "payment-kayga wuu fashilmay", "wallet-kayga waa laga jaray", "qofku ma helin", "transfer-ka maxaa ku dhacay"]);
}

function isShortWalletTransferQuestion(question: string) {
  const normalized = normalizeQuestion(question);
  return ["transfer", "side diraa", "qof kale", "wallet kale", "u dir", "lacag ugu dir", "mid kale ma u diri karaa", "wallet u gudbi", "lacag wareeji"].includes(normalized);
}

function isWalletLoginQuestion(question: string) {
  return isWalletQuestion(question) && includesAny(question, ["ma geli karo", "app-ka ma furmayo", "login ma shaqeynayo", "account ma geli karo", "login problem", "app-ku wuu i diiday"]);
}

function isBankOverviewQuestion(question: string) {
  return includesAny(question, ["premier bank waa maxay", "premier maxay tahay", "bangigan maxaa lagu qabtaa", "adeegyadiina ii sheeg", "what is premier bank", "what does premier bank do"]);
}

function isCardProblemQuestion(question: string) {
  return includesAny(question, ["card-kaygu ma shaqeynayo", "kaarkaygu ma shaqeynayo", "card ma shaqeynayo", "mastercard ma shaqeynayo", "card declined", "card not working", "kaarka diiday"]);
}

function isExchangeRateQuestion(question: string) {
  return includesAny(question, ["exchange rate", "rate-ka maanta", "sarifka maanta", "today rate", "dollar rate", "usd rate"]);
}

function isBankSecurityQuestion(question: string) {
  return includesAny(question, ["premier bank ammaan", "bank ammaan", "bank safe", "is premier bank safe", "account security", "amaan ma yahay"]);
}

function isCommunityCsrQuestion(question: string) {
  return includesAny(question, ["sos", "sos children", "sos childrens", "sos village", "community", "csr", "children support", "caruurta", "taageerada caruur", "社会责任", "የማህበረሰብ"]);
}

function isAwardsQuestion(question: string) {
  return includesAny(question, ["award", "awards", "somali tech awards", "digital banking award", "digital wallet advancement", "best mobile money app", "wearable commercial launch", "african banking brand", "abaalmarin", "tuzo", "ödül", "奖项", "ሽልማት"]);
}

function isKnownAtmLocationQuestion(question: string) {
  return isAtmQuestion(question) && includesAny(question, ["safari resort", "borama", "bosaso airport", "bosaso international airport", "al jazeera hotel", "gaalkacyo", "galkacyo", "jabir plaza"]);
}

function isPosMerchantExampleQuestion(question: string) {
  return includesAny(question, ["hyderabad biryani", "al jazeera hotel", "jabir plaza", "pos ma leeyahay", "pos ma ku yaal", "pos location", "merchant pos"]);
}

function isNiraEkycQuestion(question: string) {
  return includesAny(question, ["nira", "ekyc", "e kyc", "digital identity", "aqoonsi dijitaal", "national identification", "financial inclusion"]);
}

function isBankHistoryQuestion(question: string) {
  return includesAny(question, ["bank history", "premier bank history", "taariikhda premier bank", "taariikhdeeda", "taariikh", "goormaa la aasaasay", "established", "la aasaasay"]);
}

function isPremierPosQuestion(question: string) {
  return includesAny(question, ["premier pos", "pos waa maxay", "pos service", "pos payment", "merchant pos", "mashiinka pos", "pos ni nini", "pos hizmeti", "POS 服务", "የPOS አገልግሎት"]);
}

function isWalletSendQuestion(question: string) {
  if (includesAny(question, ["walet send", "walletsend", "walet sen"])) return true;
  const explicitWalletSend = includesAny(question, ["wallet send", "send remittance", "more than 110", "110 countries", "110 dal", "110 nchi", "110 个国家", "110 ሀገሮች"]);
  const destinationQuestion = includesAny(question, ["international", "dalal kale", "waddan kale", "countries", "egypt", "masar", "china", "shiinaha", "yurt dışı", "国际", "埃及", "中国"]);
  return explicitWalletSend || (isWalletQuestion(question) && destinationQuestion) || (!isWalletQuestion(question) && includesAny(question, ["egypt lacag", "china lacag", "shiinaha lacag"]));
}

function isSipsQuestion(question: string) {
  return includesAny(question, ["sips", "all banks in somalia", "bangiyada somalia", "bank kale lacag", "account kale lacag", "banks across somalia", "benki zote somalia", "somali bankalari", "索马里所有银行", "በሶማሊያ ባንኮች"]);
}

function isSimadQuestion(question: string) {
  return includesAny(question, ["simad", "university fee", "university fees", "jaamacad", "student financing", "qardul xasan", "leap microfinance", "ada ya chuo", "üniversite", "大学", "ዩኒቨርሲቲ"]);
}

function isVisaForumQuestion(question: string) {
  return includesAny(question, ["visa payments forum", "vpf 2026", "visa forum", "premier bank visa paris", "visa payments"]);
}

function isHajjPaymentQuestion(question: string) {
  return includesAny(question, ["hajj payment", "umrah payment", "hajj mastercard", "umrah mastercard", "saudi riyal", "riyad pos", "haleel hajj"]);
}

function isMastercardCampaignQuestion(question: string) {
  return isMastercardQuestion(question) && includesAny(question, ["campaign", "reward", "rewards", "usd 60", "60 dollar", "30 dollar", "win", "guuleyso", "tartan", "zawadi", "ödül", "奖励"]);
}

function isWorldEliteQuestion(question: string) {
  return includesAny(question, ["world elite", "worldelite", "vip card", "airport lounge", "lounge", "coffee shop airport", "card safar"]);
}

function isWalletManagerQuestion(question: string) {
  return includesAny(question, ["wallet manager", "payroll", "mushaharka shaqaalaha", "shaqaalaha mushaharkooda", "business payroll", "employee salary", "enza home"]);
}

function isSereneAtmQuestion(question: string) {
  return isAtmQuestion(question) && includesAny(question, ["serene sarovar", "serene hotel"]);
}

function isHargeisaAtmQuestion(question: string) {
  return isAtmQuestion(question) && includesAny(question, ["hargeisa", "hargaysa", "hargeysa"]);
}

function isPremierPosNamedLocationQuestion(question: string) {
  return includesAny(question, ["shaafici", "shafici", "al macruuf", "al makruuf", "galkacyo pos", "gaalkacyo pos", "bosaso pos"]);
}

function isBestServiceAwardQuestion(question: string) {
  return includesAny(question, ["best service award", "sobs", "best service", "2025 award", "2025 abaalmarin"]);
}

function isLeapProgramQuestion(question: string) {
  return includesAny(question, ["leap program", "leap waa maxay", "leap yaa", "300,000", "300000", "25 business", "25 ganacsi", "100 codsade", "qardu xassan"]);
}

function isWalletSendCupQuestion(question: string) {
  return includesAny(question, ["premier cup", "wallet send cup", "cup 2025"]);
}

function isHaleelQuestion(question: string) {
  const normalized = normalizeQuestion(question);
  const shortHajjQuery = /^(?:adeeg(?:ga)?\s+)?(?:xaj|xajj|hajj|cumro|umrah)(?:\s+adeeg(?:ga)?)?$/.test(normalized);
  return shortHajjQuery || includesAny(question, ["haleel", "hunso", "hajj installment", "umrah installment", "cumro qaybo", "xaj qaybo"]);
}

function isHaleelPriceQuestion(question: string) {
  return isHaleelQuestion(question) && includesAny(question, ["package imisa", "package waa imisa", "qiimaha package", "price", "qiimo", "bishi", "monthly", "installment bishii"]);
}

function isHaleelTermsQuestion(question: string) {
  return isHaleelQuestion(question) && !isHaleelDetailedRequest(question) && includesAny(question, ["30%", "30 percent", "boqolkiiba", "qaybo", "installment", "hadhaaga", "sanad", "muddo", "interest", "dulsaar", "ribo", "sharia", "sharia compliant"]);
}

function isHaleelDepositQuestion(question: string) {
  return isHaleelQuestion(question) && !isHaleelDetailedRequest(question) && /(?:^|\s)(?:30|30 percent|30 boqolkiiba)(?:\s|$)/i.test(normalizeQuestion(question));
}

function isHaleelAvailabilityQuestion(question: string) {
  return isHaleelQuestion(question) && includesAny(question, ["ramadan", "muharram", "shawwal", "goorma", "bilaha", "open", "fur"]);
}

function isHaleelEligibilityQuestion(question: string) {
  return isHaleelQuestion(question) && includesAny(question, ["passport", "baasaboor", "somali passport", "yaa isticmaali", "eligible", "qof aan"]);
}

function isHaleelRequirementsQuestion(question: string) {
  return isHaleelQuestion(question) && includesAny(question, ["shuruud", "documents", "dukumenti", "document"]);
}

function isHaleelApplicationQuestion(question: string) {
  return isHaleelQuestion(question) && includesAny(question, ["sideen", "sidee", "apply", "dalban", "diiwaan", "register", "package doort", "tallaabada"]);
}

function isHaleelDetailedRequest(question: string) {
  return isHaleelQuestion(question) && includesAny(question, ["faahfaahin", "wax badan", "sidee ayuu u shaqeeyaa", "full details", "explain more", "tallaabooyinka ii sheeg", "package-yadu"]);
}

function isSeniorManagementQuestion(question: string) {
  return includesAny(question, ["ceo", "premier ceo", "ceo waa kuma", "yaa madax", "madaxda premier", "maamulka sare", "chairman", "guddoomiye", "guddoomiyaha", "dr ghedi", "mohamed ghedi", "osman duale", "head of it", "head of finance", "head of operation", "head of risk", "head of audit", "head of digital", "head of investment", "head of corporate", "human resources", "madaxda bangiga"]);
}

function getSeniorManagementAnswer(question: string, language: ChatLanguage) {
  if (language !== "so" && language !== "en") return null;
  const entries = [
    { aliases: ["ceo", "madaxweyne", "yaa madax", "dr ghedi", "mohamed ghedi", "osman duale"], so: "Dr. Mohamed Ghedi Jumale waa Chief Executive Officer (CEO) ee Premier Bank. Wuxuu xilka kala wareegay Osman Duale Ahmed sannadkii 2024.", en: "Dr. Mohamed Ghedi Jumale is Premier Bank's Chief Executive Officer (CEO). He succeeded Osman Duale Ahmed in 2024." },
    { aliases: ["chairman", "guddoomiye", "guddoomiyaha", "jibril hassan"], so: "Jibril Hassan waxaa xogta magacaabista hoggaanka 2024 lagu xusay Chairman-ka Premier Bank.", en: "Jibril Hassan is named as Chairman in Premier Bank's 2024 leadership appointment information." },
    { aliases: ["investment", "financing", "abdirashid ali adle"], so: "Abdirashid Ali Adle waa Head of Investment & Financing ee Premier Bank.", en: "Abdirashid Ali Adle is Head of Investment & Financing at Premier Bank." },
    { aliases: ["corporate", "sme", "retail", "abdishakur mohamed afrah"], so: "Abdishakur Mohamed Afrah waa Head of Corporate, SME and Retail ee Premier Bank.", en: "Abdishakur Mohamed Afrah is Head of Corporate, SME and Retail at Premier Bank." },
    { aliases: ["operation", "mahadd ahmed mohamed", "mahad ahmed mohamed"], so: "Mahad Ahmed Mohamed waa Head of Operation ee Premier Bank.", en: "Mahad Ahmed Mohamed is Head of Operation at Premier Bank." },
    { aliases: ["head of it", "abdinasir hassan ali"], so: "Abdinasir Hassan Ali waa Head of IT ee Premier Bank.", en: "Abdinasir Hassan Ali is Head of IT at Premier Bank." },
    { aliases: ["head of finance", "finance", "mohamed abdirahman sheik"], so: "Mohamed Abdirahman Sheik waa Head of Finance ee Premier Bank.", en: "Mohamed Abdirahman Sheik is Head of Finance at Premier Bank." },
    { aliases: ["risk", "compliance", "safia abdi abdullahi"], so: "Safia Abdi Abdullahi waa Head of Risk & Compliance ee Premier Bank.", en: "Safia Abdi Abdullahi is Head of Risk & Compliance at Premier Bank." },
    { aliases: ["internal audit", "audit", "sayid omar ali abubakar"], so: "Sayid Omar Ali Abubakar waa Head of Internal Audit ee Premier Bank.", en: "Sayid Omar Ali Abubakar is Head of Internal Audit at Premier Bank." },
    { aliases: ["digital banking", "premier wallet", "mohamed ali adam"], so: "Mohamed Ali Adam waa Head of Digital Banking - Premier Wallet ee Premier Bank.", en: "Mohamed Ali Adam is Head of Digital Banking - Premier Wallet at Premier Bank." },
    { aliases: ["human resources", "human resource", "hr", "isak mohamed ali"], so: "Isak Mohamed Ali waa Head of Human Resources & Administration ee Premier Bank.", en: "Isak Mohamed Ali is Head of Human Resources & Administration at Premier Bank." },
  ];
  const normalized = normalizeQuestion(question);
  const entry = entries.find((item) => item.aliases.some((alias) => normalized.includes(normalizeQuestion(alias))));
  if (entry) return entry[language];
  return language === "so"
    ? "Hoggaanka fulinta ee Premier Bank waxaa madax ka ah Dr. Mohamed Ghedi Jumale, Chief Executive Officer. Waxaad ii sheegi kartaa jagada aad rabto inaad ka ogaato."
    : "Premier Bank's executive leadership is headed by Dr. Mohamed Ghedi Jumale, Chief Executive Officer. Tell me which role you would like to know about.";
}

function getHaleelAnswer(question: string, language: ChatLanguage) {
  const conciseAnswer: Record<ChatLanguage, string> = {
    so: "Premier Bank iyo HUNSo waxay bixiyaan adeegga Haleel oo loogu talagalay fududeynta Xajka iyo Cumrada. Adeeggu wuxuu kuu oggolaanayaa inaad kharashka bixiso hal mar ama qayb-qayb.",
    en: "Premier Bank and HUNSo provide Haleel to make Hajj and Umrah costs easier to manage. Customers may pay the selected package in full or through the supported instalment arrangement.",
    sw: "Ndiyo, Premier Bank inatoa Haleel kwa Hajj na Umrah, inayokusaidia kulipa gharama kwa awamu.",
    am: "አዎ፣ Premier Bank ለሐጅና ለዑምራ Haleel አገልግሎት ይሰጣል፤ ወጪውን በክፍያ ክፍሎች እንዲከፍሉ ያግዛል።",
    zh: "是的，Premier Bank 提供面向朝觐和副朝的 Haleel 服务，帮助客户分期支付相关费用。",
    tr: "Evet, Premier Bank Hac ve Umre için Haleel hizmeti sunar; masrafları taksitler halinde ödemenize yardımcı olur.",
  };
  if (language !== "so" && language !== "en") return conciseAnswer[language];
  if (isHaleelPriceQuestion(question)) return language === "so"
    ? "Qiimaha Haleel package-ka iyo lacagta instalment-ka bishii kuma jiro xogta aan hadda hayo. Fadlan Premier Bank ama HUNSo ka xaqiiji packages-ka iyo qiimahooda hadda."
    : "I do not have the current Haleel package price or monthly instalment amount. Please confirm the available packages and pricing with Premier Bank or HUNSo.";
  if (isHaleelDepositQuestion(question)) return language === "so"
    ? "30% waa lacagta bilowga ah ee laga bixiyo qiimaha guud ee package-ka Haleel ee Xajka iyo Cumrada."
    : "30% is the initial payment toward the total Haleel package price for Hajj and Umrah.";
  if (isHaleelTermsQuestion(question)) return language === "so"
    ? "Haleel waxaad qiimaha package-ka oo dhan ku bixin kartaa hal mar, ama waxaad marka hore bixin kartaa ugu yaraan 30%. Hadhaaga waxaa lagu bixiyaa installments sida qorshaha lagu heshiiyay, muddo sanad gudaheed ah. Adeeggu waa mid aan dulsaar lahayn oo waafaqsan Shareecada Islaamka."
    : "With Haleel, you may pay the full package price at once or pay at least 30% initially. The remaining balance is paid through the agreed instalment plan within one year. The service is interest-free and Sharia-compliant.";
  if (isHaleelAvailabilityQuestion(question)) return language === "so"
    ? "Adeegga Cumrada Haleel waxaa lagu sheegay inuu shaqeeyo bilaha Hijriga laga bilaabo Muharram ilaa Ramadan. Adeegga ka dambeeya Ramadan, sida Shawwal, fadlan ka xaqiiji Premier Bank ama HUNSo."
    : "Haleel's Umrah service is stated to operate during the Hijri months from Muharram through Ramadan. Please confirm availability after Ramadan, including Shawwal, with Premier Bank or HUNSo.";
  if (isHaleelEligibilityQuestion(question)) return language === "so"
    ? "Dadka haysta baasaboor Soomaali ah waxay codsan karaan Haleel sida xogta la bixiyay sheegtay. Baasaboorro kale oo la aqbalo iyo shuruudaha hadda jira fadlan ka xaqiiji Premier Bank ama HUNSo."
    : "According to the supplied information, Somali passport holders may apply for Haleel. Please confirm other accepted passports and current eligibility requirements with Premier Bank or HUNSo.";
  if (isHaleelRequirementsQuestion(question)) return language === "so"
    ? "Shuruudaha Haleel waxaa ka mid noqon kara dukumentiyo aqoonsi iyo dukumentiyo safar. Faahfaahinta saxda ah fadlan nala soo xiriir."
    : "Haleel requirements may include identification and travel documents. Please contact us for the current exact requirements.";
  if (isHaleelDetailedRequest(question)) return language === "so"
    ? "Haleel waa adeeg ay iska kaashadaan Premier Bank iyo HUNSo oo fududeynaya kharashaadka Xajka iyo Cumrada. Waxaad bixin kartaa lacagta oo dhan hal mar, ama ugu yaraan 30% qiimaha package-ka ayaad horudhac u bixin kartaa, inta hartayna qayb-qayb ayaad ku bixin kartaa muddo ilaa hal sano ah. Adeeggu waa mid aan dulsaar lahayn oo waafaqsan Shareecada."
    : "Haleel is a Premier Bank and HUNSo partnership that helps customers manage Hajj and Umrah costs. You may pay in full or pay at least 30% initially and settle the remaining balance through instalments within one year. The service is interest-free and Sharia-compliant.";
  if (isHaleelApplicationQuestion(question)) return language === "so"
    ? "Si aad Haleel u hesho, la xiriir Premier Bank ama HUNSo, dooro package-ka la heli karo, bixi ugu yaraan 30%, kadibna saxiix qorshaha installment-ka lagu heshiiyay."
    : "To use Haleel, contact Premier Bank or HUNSo, choose an available package, pay at least 30%, then sign the agreed instalment plan.";
  return conciseAnswer[language];
}

const facebookQuickAnswers: Record<"so" | "en", { virtualCard: string; premierTap: string; walletSend: string; sips: string; simad: string; visaForum: string; hajj: string; campaign: string }> = {
  so: {
    virtualCard: "Premier Virtual Card waa kaar dijitaal ah oo aad ka dalban karto Premier Wallet adigoon booqan branch-ka. Waxaad ugu isticmaali kartaa purchases gudaha iyo dibadda dalka, online shopping caalami ah, iyo Tap to Pay taleefankaaga adigoo adeegsanaya device la taageero. Waxaana ku maamuli kartaa Premier Wallet; post-ka rasmiga ah wuxuu sheegayaa in lagu heli karo daqiiqado gudahood. Khidmadaha iyo u-qalmitaanka faahfaahintooda hadda ma hayo.",
    premierTap: "Premier Tap waa xal lacag-bixin contactless ah oo casri ah. Waxaad ku bixin kartaa adigoo taabanaya device la taageero, oo ay ku jiraan ring iyo qalab kale oo Premier Tap ah. Waxaa loo naqshadeeyay lacag-bixin degdeg ah, ku habboon, oo ammaan ah.",
    walletSend: "Premier Wallet Wallet Send wuxuu kuu oggolaanayaa inaad lacag u dirto in ka badan 110 dal, iyadoo lacagta loo diri karo bank account, mobile wallet, ama cash pickup. Egypt si rasmi ah ayaa looga xusay: fur Premier Wallet, dooro Wallet Send, kadib Send Remittance, oo dooro Egypt. China ama waddan kale gaar ahaan lama xaqiijin karo ilaa uu ka muuqdo liiska Wallet Send.",
    sips: "SIPS waa nidaamka instant money transfer ee kuu oggolaanaya inaad lacag u dirto ama uga hesho bangiyada Soomaaliya oo dhan. Waxa kale oo aad Premier Wallet uga maamuli kartaa lacagahaaga meel kasta iyo wakhti kasta.",
    simad: "Premier Bank iyo SIMAD University waxay iska kaashadeen adeegyo lacag-bixin iyo horumar. Ardayda SIMAD waxay ku bixin karaan fees-ka jaamacadda ee la taageero Premier Wallet iyagoo taleefankooda adeegsanaya, iyaga oo aan tagin payment centre. Wadahadalladu sidoo kale waxay taabteen LEAP Microfinance oo taageerta startups iyo SMEs, iyo Student Financing (Qardul Xasan).",
    visaForum: "Premier Bank waxay ka qaybgashay Visa Payments Forum 2026 ee Paris, France, June 30 ilaa July 2, 2026. Dr. Mohamed Ghedi Jumale iyo Mr. Mahad Ahmed Mohamed waxay ka mid ahaayeen wakiillada; waxaa laga hadlay digital payments, AI, risk management, iyo mustaqbalka adeegyada maaliyadeed.",
    hajj: "Premier Bank waxay xayeysiisay Premier Mastercard iyo Premier Tap ee lacag-bixinnada Hajj iyo Umrah ee Saudi Arabia, waxayna xustay iskaashi ay la leedahay Haleel Hajj & Umrah Services. Waxaa jiray dallacsiin gaar ah oo POS fee-ga Riyal laga dhaafay; muddada iyo shuruudaha hadda jira lama xaqiijin, sidaas darteed fadlan nala soo xiriir ka hor isticmaalka.",
    campaign: "Premier Mastercard campaign-ka rasmiga ah wuxuu sheegayaa in kharash ugu yaraan USD 60 lagu galo, USD 30 kasta oo dheeraad ahna uu kordhinayo fursadda abaalmarinta. Taariikhda campaign-ka iyo shuruudo kale lama bixin, sidaas darteed fadlan nala soo xiriir si aad u xaqiijiso inuu weli socdo.",
  },
  en: {
    virtualCard: "Premier Virtual Card is a digital card you can request through Premier Wallet without visiting a branch. You can use it for purchases inside and outside the country, international online shopping, and Tap to Pay on a supported phone. You can manage it in Premier Wallet, and the official post says it can be obtained within minutes. I do not have the fee or eligibility details at the moment.",
    premierTap: "Premier Tap is a modern contactless-payment solution. You can make tap payments with supported devices, including a ring and other Premier Tap devices. It is designed to be fast, convenient, secure and modern.",
    walletSend: "Premier Wallet Wallet Send lets you send money to more than 110 countries, to a bank account, mobile wallet, or cash pickup. Egypt is specifically confirmed: open Premier Wallet, select Wallet Send, select Send Remittance, then choose Egypt. China or another individual country should only be treated as available if it appears in the Wallet Send country list.",
    sips: "SIPS is an instant money-transfer system that lets you send money to, and receive money from, banks across Somalia. You can also manage your funds through Premier Wallet from anywhere and at any time.",
    simad: "Premier Bank and SIMAD University partnered on payment and development initiatives. SIMAD students can pay supported university fees using Premier Wallet on their phones without visiting a payment centre. The discussions also covered LEAP Microfinance support for startups and SMEs and Student Financing (Qardul Xasan).",
    visaForum: "Premier Bank participated in Visa Payments Forum 2026 in Paris, France, from June 30 to July 2, 2026. Dr. Mohamed Ghedi Jumale and Mr. Mahad Ahmed Mohamed were among the representatives. Topics included digital payments, AI, risk management and the future of financial services.",
    hajj: "Premier Bank has promoted Premier Mastercard and Premier Tap for Hajj and Umrah payments in Saudi Arabia, and mentioned its collaboration with Haleel Hajj & Umrah Services. A temporary Riyal POS-fee waiver was mentioned, but its current dates and terms are not confirmed; please contact us before relying on that offer.",
    campaign: "The official Premier Mastercard campaign information states that spending at least USD 60 qualifies a customer to participate, and each additional USD 30 increases the chance of rewards. No campaign dates or further terms were provided, so please contact us to confirm whether it is currently active.",
  },
};

const suppliedServiceAnswers: Record<"so" | "en", { mastercardPrice: string; mastercardBooking: string; virtualSubscription: string; worldElite: string; walletManager: string; sereneAtm: string; posLocations: string; bestServiceAward: string; leap: string; walletSendCup: string }> = {
  so: {
    mastercardPrice: "Premier Mastercard waxaa lagu heli karaa $2.",
    mastercardBooking: "Haa, Premier Mastercard waxaad ugu adeegsan kartaa booking-yada iyo adeegyada safarka ee online-ka ah ee aqbala Mastercard, sida Booking.com iyo Trip.com.",
    virtualSubscription: "Premier Virtual Card waa kaar dijitaal ah oo kuu sahlaya lacag-bixinnada online-ka ah. Waxaad ugu bixin kartaa adeegyada digital-ka ee aqbala kaarka, sida ChatGPT, adigoo meel kasta jooga.",
    worldElite: "Premier World Elite Mastercard waa kaar heer sare ah oo ku habboon safarrada caalamiga ah. Waxa uu leeyahay adeegyo VIP iyo helitaanka lounge-yada iyo coffee shop-yada garoomada diyaaradaha ee adeeggu taageero. Qiimaha iyo shuruudaha hadda ma hayo; fadlan nala soo xiriir.",
    walletManager: "Premier Wallet Manager wuxuu ganacsiyada u fududeeyaa maaraynta iyo bixinta mushaaraadka shaqaalaha si casri ah oo fudud.",
    sereneAtm: "ATM-ka Premier Bank waxaad ka heli kartaa SERENE SAROVAR Hotel, Hargeysa. Waxaa laga heli karaa lacag-bixin, PIN beddelid, iyo hubinta hadhaaga.",
    posLocations: "Premier Bank POS waxaa lagu xusay Shaafici Pharmacy & Supermarket ee Galkacyo iyo Al Macruuf Shopping Center ee Bosaso, Puntland. Waxaad halkaas ku samayn kartaa lacag-bixin marka adeegga POS la taageero.",
    bestServiceAward: "Premier Bank wuxuu ku guuleystay Best Service Award 2025, oo ay bixisay Hay'adda Tayo-dhowrka Qaranka Soomaaliyeed (SOBS).",
    leap: "LEAP waa barnaamij ay iska kaashadeen Premier Bank, SIMAD iLab iyo Direct Aid. Qeybta koowaad, 25 ganacsi ayaa helay maalgelin Qardu Xasan ah oo wadarteedu tahay $300,000, kadib 100 codsade.",
    walletSendCup: "Kooxda Wallet Send ayaa ku guuleysatay Premier Cup 2025.",
  },
  en: {
    mastercardPrice: "Premier Mastercard is available for $2.",
    mastercardBooking: "Yes. You can use Premier Mastercard for online travel bookings and services that accept Mastercard, including Booking.com and Trip.com.",
    virtualSubscription: "Premier Virtual Card is a digital card for online payments. You can use it for supported digital services that accept the card, including ChatGPT, from wherever you are.",
    worldElite: "Premier World Elite Mastercard is a premium card for international travel. It includes VIP services and access to supported airport lounges and coffee shops. I do not have the current price or eligibility details; please contact us.",
    walletManager: "Premier Wallet Manager helps businesses manage and pay employee salaries in a modern, convenient way.",
    sereneAtm: "You can find a Premier Bank ATM at SERENE SAROVAR Hotel in Hargeisa. Available services include cash withdrawals, PIN changes, and balance checks.",
    posLocations: "Premier Bank POS is source-mentioned at Shaafici Pharmacy & Supermarket in Galkacyo and Al Macruuf Shopping Center in Bosaso, Puntland. You can make a payment there where Premier POS is supported.",
    bestServiceAward: "Premier Bank received the Best Service Award 2025 from the Somali National Quality Assurance body (SOBS).",
    leap: "LEAP is a collaboration between Premier Bank, SIMAD iLab, and Direct Aid. In its first cohort, 25 businesses received a total of $300,000 in Qardu Xasan financing after 100 applicants participated.",
    walletSendCup: "The Wallet Send team won the Premier Cup 2025.",
  },
};

const expandedServiceAnswers: Record<"so" | "en", { walletDownload: string; walletRegistration: string; walletBill: string; walletTopUp: string; walletTransfer: string; walletWithdrawal: string; walletExchange: string; walletTvBill: string; walletEducationBill: string; paymentGateway: string; jabaneAtm: string; cashDeposit: string }> = {
  so: {
    walletDownload: "Haa, Premier Wallet app waa la heli karaa: [Google Play](https://swiy.co/premierwallet) iyo [App Store](https://hi.switchy.io/premierwallet).",
    walletRegistration: "Si aad Premier Wallet isu diiwaan geliso, marka hore app-ka ka soo deg Google Play ama App Store. Fur app-ka oo dooro Sign Up, geli mobile number-kaaga, magacaaga oo dhan, iyo nooca aqoonsiga sida National ID ama Passport. Kadib OTP ayaa lagu xaqiijinayaa number-kaaga, waxaadna samaysataa PIN kuu gaar ah oo dhammaystirtaa diiwaangelinta. Ha la wadaagin OTP-gaaga ama PIN-kaaga cidna.",
    walletBill: "Haa, Premier Wallet waxaad uga bixin kartaa biilal koronto oo la taageero. Fur Bill Payments, dooro biilka, geli bill/meter/account information-ka loo baahan yahay, xaqiiji lacagta, kadibna dhammaystir payment-ka. Ma hayo provider ama bill identifier gaar ah; fadlan ka hubi app-ka ama nala soo xiriir haddii aad u baahan tahay caawimaad.",
    walletTopUp: "Premier Wallet waxay taageertaa wallet top-up. Fur app-ka oo raac top-up option-ka la heli karo si aad lacag ugu shubto Wallet-kaaga. Xadka, khidmadaha, iyo hababka top-up-ka ee hadda jira lama bixin; fadlan ka hubi app-ka ama nala soo xiriir faahfaahin sax ah.",
    walletTransfer: "Fur app-ka Premier Wallet, ku dhufo Transfer Money, dooro qofka aad lacagta u dirayso, geli lacagta aad dirayso, haddii aad rabto dooro Transaction Category, kadib Next dheh. Hubi faahfaahinta, kadibna dir. QR Code-ka iyo Merchant ID-gu waxay khuseeyaan Merchant Payment, mana aha Wallet-to-Wallet transfer.",
    walletWithdrawal: "Xogta la xaqiijiyay waxay muujinaysaa in Premier Wallet deposit iyo withdrawal laga samayn karo ATM-yada iyo agents-ka la taageero. Habraaca saxda ah wuxuu ku xiran yahay adeegga ama goobta la taageero; fadlan ka hubi app-ka, Branch Locator, ama nala soo xiriir ka hor intaadan booqan.",
    walletExchange: "Premier Wallet waxay leedahay Exchange feature. Door Exchange, dooro currencies-ka, geli lacagta, eeg exchange rate-ka app-ku muujiyo, kadibna xaqiiji. USD ilaa Somaliland Shilling waa tusaale la bixiyay; lama xaqiijin in dhammaan currency pairs ay hadda jiraan.",
    walletTvBill: "Haa, Premier Wallet waxay taageertaa TV bill payments oo la taageero. Fur Bill Payments ama Utility/Fee Payments, dooro TV service-ka, geli customer ama decoder information-ka loo baahan yahay, xaqiiji lacagta, kadibna dhammaystir payment-ka. Provider gaar ah lama xaqiijin.",
    walletEducationBill: "Premier Wallet waxay taageertaa school iyo university fee payments oo la taageero. Fur Bill Payments ama Utility/Fee Payments, dooro adeegga waxbarashada, geli student/customer number-ka loo baahan yahay, xaqiiji lacagta, kadibna dhammaystir payment-ka. SIMAD ayaa si gaar ah loo xaqiijiyay; jaamacad kasta lama xaqiijin.",
    paymentGateway: "Premier Payment Gateway waa xal lacag-bixin dijitaal ah oo loogu talagalay ganacsiyada iyo merchants-ka Soomaaliyeed. Waxay la shaqaysaa Mastercard, waxaana ku shaqeeya Mastercard Payment Gateway Services (MPGS), si ganacsigu u aqbalo card payments caalami ah, online purchases, iyo payments lacag qalaad oo la taageero. Waa adeeg ganacsi, mana aha Premier Wallet ama personal Mastercard.",
    jabaneAtm: "Premier Bank ATMs waxaa laga helaa laba goobood oo Jabane Supermarket ah oo Hargeisa ku yaal. Waxaad ka samayn kartaa cash withdrawal, PIN change, balance inquiry, iyo adeegyo ATM kale. Saacadaha 08:00 AM–04:00 PM waxay ahaayeen ogeysiis Ramadan ah, sidaas darteed ma aha saacado joogto ah; customer service waxaa lagu sheegay 24/7.",
    cashDeposit: "Premier Bank ATM Cash Deposit waxaa lagu dhawaaqay 22.08.2024. ATM-yada la taageero waxaad lacag caddaan ah ugu shubi kartaa account-kaaga si real-time ah, ammaan ah, 24/7. Tag ATM, geli ATM/debit card-ka, dooro Cash Deposit, geli lacagta, xaqiiji amount-ka, kadibna dhammaystir transaction-ka. Xadka, denominations-ka, khidmadaha, iyo ATM locations-ka la taageero hadda ma hayo; fadlan nala soo xiriir si aad u xaqiijiso.",
  },
  en: {
    walletDownload: "Yes, Premier Wallet is available: [Google Play](https://swiy.co/premierwallet) and [App Store](https://hi.switchy.io/premierwallet).",
    walletRegistration: "To register for Premier Wallet, download the app from Google Play or the App Store, open it and choose Sign Up. Enter your mobile number, full name and an identification type such as National ID or Passport. Your mobile number is verified by OTP, then you create a private PIN and complete registration. Never share your OTP or PIN with anyone.",
    walletBill: "Yes, Premier Wallet supports eligible electricity bill payments. Open Bill Payments, select the bill, enter the required bill, meter or account information, confirm the amount, and complete the payment. I do not have a specific provider or bill identifier; please check the app or contact us if you need help.",
    walletTopUp: "Premier Wallet supports wallet top-up. Open the app and use the available top-up option to add money to your Wallet. Current limits, fees and top-up methods are not provided; please check the app or contact us for accurate details.",
    walletTransfer: "Open Premier Wallet, select Transfer Money, choose the recipient, enter the amount, optionally choose Transaction Category, select Next, review the details, then send. QR Code and Merchant ID apply to Merchant Payment and are not Wallet-to-Wallet transfer methods.",
    walletWithdrawal: "Verified information shows that Premier Wallet deposits and withdrawals can be made through supported Premier Bank ATMs and agents. The exact procedure depends on the supported service or location; please check the app, Branch Locator or contact us before visiting.",
    walletExchange: "Premier Wallet includes an Exchange feature. Select Exchange, choose the currencies, enter the amount, review the exchange rate displayed in the app, then confirm. USD to Somaliland Shilling is a supplied example; not every currency pair is confirmed as currently available.",
    walletTvBill: "Yes, Premier Wallet supports eligible TV bill payments. Open Bill Payments or Utility/Fee Payments, choose the TV service, enter the required customer or decoder information, confirm the amount, and complete payment. A specific provider is not confirmed.",
    walletEducationBill: "Premier Wallet supports eligible school and university fee payments. Open Bill Payments or Utility/Fee Payments, choose the education service, enter the required student or customer number, confirm the amount, and complete payment. SIMAD is specifically verified; not every university is confirmed.",
    paymentGateway: "Premier Payment Gateway is a digital payment solution for Somali businesses and merchants. It works in partnership with Mastercard and is powered by Mastercard Payment Gateway Services (MPGS), helping businesses accept supported international card payments, online purchases and foreign-currency payments. It is a business solution, not Premier Wallet or a personal Mastercard.",
    jabaneAtm: "Premier Bank ATMs are available at two Jabane Supermarket locations in Hargeisa. Available services include cash withdrawal, PIN change, balance inquiry and other ATM services. The 08:00 AM–04:00 PM hours were part of a Ramadan announcement and are not year-round hours; customer service was described as 24/7.",
    cashDeposit: "Premier Bank ATM Cash Deposit was announced on 22.08.2024. At supported ATMs, you can deposit cash into your account in real time, securely and 24/7. Go to the ATM, insert your ATM/debit card, choose Cash Deposit, insert the cash, confirm the amount, and complete the transaction. I do not have the deposit limits, accepted denominations, fees or supported ATM locations; please contact us to confirm them.",
  },
};

const communityAndLocationAnswers: Record<"so" | "en", { csr: string; awards: string; atmLocation: string; pos: string; posMerchant: string; nira: string; history: string }> = {
  so: {
    csr: "Premier Bank waxay taageertaa SOS Children's Villages Somalia iyada oo qayb ka ah community/CSR work-keeda. Taageerada la xusay waxaa ka mid ah kharashaadka nolosha carruurta, healthcare, iyo education.",
    awards: "Xogta taariikhiga ah ee la bixiyay waxay xustaa Somali Tech Awards, Digital Banking Award, Digital Wallet Advancement Award, Best Mobile Money App of the Year 2025, First Wearable Commercial Launch in East Africa, iyo Outstanding African Banking Brand Excellence Award 2025. Kuwani waa aqoonsiyo hore, mana aha offers hadda jira.",
    atmLocation: "Xogta la bixiyay waxay xustaa Premier Bank ATM locations ku yaal Safari Resort Hotel ee Borama, Bosaso International Airport, Al Jazeera Hotel ee Gaalkacyo, iyo Jabir Plaza Hotel ee Bosaso. Liiskani ma aha dhammaan ATM-yada, mana hayo cinwaan, saacado, ama availability-ga ATM gaar ah; fadlan ka hubi Branch Locator ama nala soo xiriir.",
    pos: "Premier POS waa adeeg lacag-bixin oo loogu talagalay shops, restaurants, iyo merchants. Waxay macaamiisha u sahlaysaa card payments, Mastercard, Visa, iyo contactless payments meelaha la taageero; ganacsataduna waxay ka faa'iideystaan digital payments, transactions degdeg ah, iyo settlement merchant account-ka halka la taageero. Premier POS gudaha Soomaaliya waxaa lagu xusay inuu free yahay; faahfaahinta merchant-specific ama settlement-ka nala soo xiriir.",
    posMerchant: "Premier POS merchant examples ee la xusay waxaa ka mid ah Hyderabad Biryani, Al Jazeera Hotel ee Gaalkacyo, iyo Jabir Plaza Hotel ee Bosaso. Kuwani waa examples oo keliya, mana aha merchant directory dhammeystiran. Premier POS wuxuu taageeraa card payments iyo contactless payments meelaha la taageero.",
    nira: "NIRA, digital identity iyo eKYC waxaa laga wada hadlay sidii loogu xiriirin lahaa adeegyada maaliyadeed iyo Premier Wallet si loo xoojiyo financial inclusion. Faahfaahinta technical integration-ka iyo availability-ga hadda jira lama bixin; fadlan nala soo xiriir haddii aad rabto xogta ugu dambeysa.",
    history: "Waxaan hayaa xog taariikhi ah oo xusaysa horumarinta adeegyada dijitaalka iyo abaalmarinno, balse ma hayo taariikh aasaasid ama faahfaahin buuxda oo hadda la xaqiijiyay. Fadlan nala soo xiriir si aad u hesho xog rasmi ah oo dheeraad ah.",
  },
  en: {
    csr: "Premier Bank supports SOS Children's Villages Somalia as part of its community/CSR work. The support mentioned includes children's living expenses, healthcare and education.",
    awards: "The supplied historical information mentions Somali Tech Awards, Digital Banking Award, Digital Wallet Advancement Award, Best Mobile Money App of the Year 2025, First Wearable Commercial Launch in East Africa, and Outstanding African Banking Brand Excellence Award 2025. These are historical recognitions, not current offers.",
    atmLocation: "The supplied information mentions Premier Bank ATM locations at Safari Resort Hotel in Borama, Bosaso International Airport, Al Jazeera Hotel in Gaalkacyo, and Jabir Plaza Hotel in Bosaso. This is not a complete ATM list, and I do not have a specific ATM's address, hours or availability; please check the Branch Locator or contact us.",
    pos: "Premier POS is a payment service for shops, restaurants and merchants. It lets customers make supported card payments with Mastercard, Visa and contactless payments, while merchants can benefit from digital payments, faster transactions and settlement to a merchant account where supported. Premier POS is described as free inside Somalia; please contact us for merchant-specific or settlement details.",
    posMerchant: "Source-mentioned Premier POS merchant examples include Hyderabad Biryani, Al Jazeera Hotel in Gaalkacyo, and Jabir Plaza Hotel in Bosaso. These are examples only, not a complete merchant directory. Premier POS supports card and contactless payments where supported.",
    nira: "NIRA, digital identity and eKYC have been discussed in connection with financial services and Premier Wallet to support financial inclusion. Technical integration details and current availability are not supplied; please contact us for the latest information.",
    history: "I have historical information about digital-service development and recognitions, but I do not have a fully verified establishment date or complete history to share at the moment. Please contact us for official historical information.",
  },
};

const walletTrainingAnswers: Record<"so" | "en", {
  balance: string;
  history: string;
  pinHelp: string;
  profilePhoto: string;
  mastercardFunding: string;
  virtualFunding: string;
  bankToWallet: string;
  walletToBank: string;
  walletToWallet: string;
  agentDeposit: string;
  merchantPayment: string;
  transactionProblem: string;
  login: string;
  forgotMpin: string;
  changeMpin: string;
  changePassword: string;
  forgotPassword: string;
  biometrics: string;
  myQr: string;
  accountBalanceMobile: string;
  viewDigitalCard: string;
  cardManagement: string;
  multipleCards: string;
}> = {
  so: {
    balance: "Haraagaaga waxaad ka hubin kartaa Premier Wallet, Online Banking ama ATM-ka la taageero. Anigu ma arki karo balance-kaaga ama xogta koontadaada. Fadlan ha ii soo dirin PIN, MPIN ama OTP.",
    history: "Fur Premier Wallet oo hoose ka dooro History si aad u aragto transactions-kaaga. Haddii aad rabto taariikh gaar ah, isticmaal calaamadda book-ka oo dooro date-ka; report-ka waxaad ka arki kartaa app-ka ama email ayaa laguugu soo diri karaa. Anigu ma arki karo transactions-kaaga gaarka ah.",
    pinHelp: "PIN ama MPIN waa xog sir ah—ha ii soo dirin kii hore ama kan cusub. Ka raadi Security ama Settings gudaha Premier Wallet haddii option-ku kuu muuqdo. Haddii aad ilowdo ama aadan helin option-ka, isticmaal recovery-ga rasmiga ah ama la xiriir Premier Bank.",
    profilePhoto: "Fur app-ka Premier Wallet, ku dhufo 3-da line ee bidix kore, kadib dooro Profile. Halkaas ka beddel ama ku dar sawirkaaga profile-ka.",
    mastercardFunding: "Habka saxda ah ee Wallet-ka loogu wareejiyo lacag Premier Mastercard kuma jiro xogta la xaqiijiyay ee aan hadda hayo. Fadlan ka hubi qaybta Cards ee app-ka rasmiga ah ama la xiriir Premier Bank; ha xaqiijin transaction ilaa aad hubiso card-ka iyo qadarka.",
    virtualFunding: "Waxaan fahmay inaad ka hadlayso lacag ku shubista Virtual Card-ka. Habka funding-ka saxda ah kuma jiro xogta la xaqiijiyay ee aan hadda hayo; fadlan raac tilmaamaha qaybta Cards/Virtual Card haddii option-ku kuu muuqdo, ama la xiriir Premier Bank.",
    bankToWallet: "Fur app-ka Premier Wallet, ku dhufo Top Up, geli lacagta aad rabto, kadib dooro account-ka lacagta laga soo qaadayo. Hubi account-ka iyo lacagta, kadib ku dhufo Top Up.",
    walletToBank: "Fur app-ka Premier Wallet, ku dhufo Withdraw, kadib dooro Withdraw to Account. Geli lacagta, hubi faahfaahinta, kadib ku dhufo Withdraw.",
    walletToWallet: "Haa, Premier Wallet wuxuu taageeraa Wallet-to-Wallet transfer. Hubi qofka aad u dirayso iyo qadarka lacagta ka hor xaqiijinta.",
    agentDeposit: "Xogta la bixiyay waxay sheegaysaa in Premier Wallet uu leeyahay deposit iyo withdrawal lala xiriirin karo agents iyo ATM-yada la taageero. Hubi in agent-ku yahay mid rasmi ah, kadibna ka xaqiiji Premier Bank habka iyo agent-ka kuu dhow.",
    merchantPayment: "Gal Premier Wallet oo hoose ka dooro Pay. Scan garee QR Code-ka merchant-ka ama geli Merchant ID; hubi magaca ganacsiga, geli qadarka, kadibna dir. QR-ga halkan waa merchant payment, mana aha Wallet-to-Wallet transfer.",
    transactionProblem: "Waan ka xumahay dhibaatada. Marka hore ka hubi transaction status-ka Premier Wallet. Haddii lacagta laga jaray laakiin aysan gaarin, ha ku celin dirista ilaa aad xaqiijiso xaaladda transaction-kii hore; kaydi transaction reference-ka haddii uu muuqdo, kadibna la xiriir Premier Bank.",
    login: "Hubi internet-kaaga iyo in Premier Wallet app-ku yahay nooca ugu dambeeya. Haddii login-ka ama MPIN-ku ku diido, ha la wadaagin MPIN-kaaga; isticmaal recovery-ga rasmiga ah ama la xiriir Premier Bank Customer Support.",
    forgotMpin: "Haddii MPIN-ka Premier Wallet kaa lumo, fur app-ka, ku dhufo 3-da line ee bidix kore, kadib Menu > Settings > Forget MPIN. Lambarkaaga si automatic ah ayuu u soo qabanayaa; ku dhufo Verify, kadibna samee MPIN cusub gudaha app-ka. MPIN-kaaga cidna ha la wadaagin.",
    changeMpin: "Fur Premier Wallet → taabo 3-da line ee bidix kore → Settings → Change MPIN. Geli MPIN-ka hadda aad isticmaasho, kadibna samee MPIN cusub.\n\n⚠️ Ha nala wadaagin MPIN-kaaga hadda ama MPIN-ka cusub. Haddii aad illowday MPIN-ka, dooro Forget MPIN oo raac recovery-ga app-ka.",
    changePassword: "Password-ka waxaad ka beddeli kartaa Premier Wallet: Menu-ga 3-da line ka fur, tag Settings, kadib dooro Change Password. Geli password-ka hadda jira, kadib password-ka cusub laba jeer gudaha app-ka. Ha ku qorin password-ka halkan.",
    forgotPassword: "Haddii password-ka kaa lumo, fur Premier Wallet oo dooro Forget Password. Geli lambarkaaga gudaha app-ka, xaqiiji code-ka laguu soo diro gudaha app-ka, kadibna samee password cusub. OTP-ga ama code-ka ha la wadaagin cidna.",
    biometrics: "Face ID ama Touch ID waxaad ka shidi kartaa Premier Wallet: fur Menu-ga 3-da line ee bidix kore, tag Settings, hoosna ka raadi Touch ID/Face ID oo shid haddii telefoonkaagu taageero.",
    myQr: "QR-gaaga waxaad ka heli kartaa My QR ee qaybta hoose ee Premier Wallet. Ku dhufo My QR kadibna waad share-gareyn kartaa haddii aad rabto inaad qof u dirto.",
    accountBalanceMobile: "Si aad u aragto haraaga bank account-ka, fur Premier Wallet > Mobile Banking, geli PIN-kaaga gudaha app-ka oo keliya, kadib ku dhufo calaamadda isha si balance-ku kuu muuqdo. PIN-ka ha ku soo dirin chatbot-ka.",
    viewDigitalCard: "Si aad digital card-ka u aragto, gal Premier Wallet > Mobile Banking > Card Management > Show Digital Card ama calaamadda isha. PIN-kaaga gudaha app-ka ku geli oo keliya; card number-ka, CVV-ga iyo PIN-ka ha la wadaagin cidna.",
    cardManagement: "Mobile Banking > Card Management waxaad ka samayn kartaa Block Card, Unblock Card, Reset Card PIN, Change Card PIN iyo Delete Card. Xogta sirta ah iyo PIN-ka geli gudaha app-ka oo keliya.",
    multipleCards: "Haddii cards badan koontadaada ku xiran yihiin, Card Management gudaheeda slide garee ama isticmaal calaamadaha dhinacyada card-ka si card-ka xiga kuu soo baxo.",
  },
  en: {
    balance: "You can check your balance in Premier Wallet, Online Banking or a supported ATM. I cannot access your balance or account information. Never share your PIN, MPIN or OTP with me.",
    history: "Open Premier Wallet and select History in the lower navigation to review transactions. For a specific date, use the book icon and select the date; the report may be viewed in the app or sent by email. I cannot access your private transactions.",
    pinHelp: "Your PIN or MPIN is confidential—never send your old or new code here. Check Security or Settings in Premier Wallet if the option is available. If you forgot it or cannot find the option, use the official recovery process or contact Premier Bank.",
    profilePhoto: "Open Premier Wallet, tap the three-line menu in the upper left, then choose Profile. Add or change your profile picture there.",
    mastercardFunding: "I do not have verified steps for funding a Premier Mastercard from Premier Wallet. Please check the Cards area in the official app or contact Premier Bank, and do not confirm a transaction until you have checked the card and amount.",
    virtualFunding: "I understand that you are asking about funding a Virtual Card. I do not have verified funding steps; please follow the Cards/Virtual Card guidance if the option is visible, or contact Premier Bank.",
    bankToWallet: "Open Premier Wallet, select Top Up, enter the amount, then select the account that will fund the Wallet. Verify the account and amount, then select Top Up.",
    walletToBank: "Open Premier Wallet, select Withdraw, then choose Withdraw to Account. Enter the amount, verify the details, then select Withdraw.",
    walletToWallet: "Yes, Premier Wallet supports Wallet-to-Wallet transfers. Confirm the recipient and amount before completing the transfer.",
    agentDeposit: "The supplied information mentions deposit and withdrawal services through supported agents and ATMs. Please verify that an agent is official, then confirm the process and nearest agent with Premier Bank.",
    merchantPayment: "Open Premier Wallet and select Pay in the lower navigation. Scan the merchant QR Code or enter a Merchant ID, confirm the merchant name, enter the amount, then send. This QR flow is for merchant payment, not Wallet-to-Wallet transfer.",
    transactionProblem: "I am sorry you are having trouble. First check the transaction status in Premier Wallet. If money was deducted but has not arrived, do not send it again until the earlier transaction is confirmed; keep the transaction reference if shown, then contact Premier Bank.",
    login: "Check your connection and make sure Premier Wallet is up to date. If login or MPIN is not working, never share your MPIN; use the official recovery process or contact Premier Bank Customer Support.",
    forgotMpin: "If you forgot your Premier Wallet MPIN, open the app, tap the three-line menu in the upper left, then choose Settings > Forget MPIN. Your number is captured automatically; tap Verify and create a new MPIN inside the app. Never share your MPIN.",
    changeMpin: "Open Premier Wallet → tap the three-line menu in the upper left → Settings → Change MPIN. Enter your current MPIN, then create a new MPIN.\n\n⚠️ Never share your current or new MPIN. If you forgot it, choose Forget MPIN and follow the app recovery process.",
    changePassword: "To change your password, open the three-line menu in Premier Wallet, go to Settings and select Change Password. Enter your current password, then enter the new password twice inside the app. Never type your password here.",
    forgotPassword: "If you forgot your password, open Premier Wallet and select Forget Password. Enter your number in the app, verify the received code inside the app, then create a new password. Never share the OTP or verification code.",
    biometrics: "You can enable Face ID or Touch ID in Premier Wallet by opening the three-line menu, choosing Settings, then finding and enabling Touch ID/Face ID if your device supports it.",
    myQr: "You can find your QR code under My QR in the lower navigation of Premier Wallet. Tap My QR, then share it if you want to send it to someone.",
    accountBalanceMobile: "To view your bank-account balance, open Premier Wallet > Mobile Banking, enter your PIN only inside the app, then tap the eye icon to reveal the balance. Never send your PIN to the chatbot.",
    viewDigitalCard: "To view your digital card, open Premier Wallet > Mobile Banking > Card Management > Show Digital Card or the eye icon. Enter your PIN only inside the app; never share your card number, CVV or PIN.",
    cardManagement: "In Mobile Banking > Card Management, you can Block Card, Unblock Card, Reset Card PIN, Change Card PIN and Delete Card. Enter confidential details only inside the app.",
    multipleCards: "If multiple cards are linked to your account, use the side controls or slide in Card Management to view the next card.",
  },
};

const commonCustomerAnswers: Record<"so" | "en", { bankOverview: string; cardProblem: string; exchangeRate: string; security: string }> = {
  so: {
    bankOverview: "Premier Bank waa bangi bixiya adeegyo maaliyadeed oo ay ka mid yihiin koontooyin, Premier Mastercard, Premier Wallet, lacag-dirid, ATM, POS iyo adeegyo dijitaal ah.",
    cardProblem: "Haddii kaarkaagu shaqeyn waayo ama transaction-ku diidmo, hubi in merchant-ka ama ATM-ku aqbalo kaarka oo ha ku celcelin payment-ka si badan. Ma arki karo xaaladda kaarkaaga; fadlan ka hubi status-ka rasmiga ah ama la xiriir Premier Bank.",
    exchangeRate: "Sarifka maanta waa xog isbeddelaysa. Ma qiyaasi karo rate-ka hadda jira; fadlan ka hubi Premier Wallet ama Premier Bank ka hor transaction-ka.",
    security: "Premier Bank waxay bixisaa adeegyo bangi iyo dijitaal ah oo leh habab amni, balse ilaalinta koontadaada waxay ku xirantahay inaadan cidna la wadaagin PIN, MPIN, OTP, CVV ama password. Isticmaal oo keliya kanaallada rasmiga ah ee Premier Bank.",
  },
  en: {
    bankOverview: "Premier Bank provides financial services including accounts, Premier Mastercard, Premier Wallet, money transfers, ATM, POS and digital-banking services.",
    cardProblem: "If your card is not working or a transaction is declined, check that the merchant or ATM accepts the card and avoid repeatedly trying the payment. I cannot view your card status; please check through the official service or contact Premier Bank.",
    exchangeRate: "Exchange rates change. I cannot estimate the current rate; please check Premier Wallet or Premier Bank before making a transaction.",
    security: "Premier Bank provides banking and digital services with security measures, but protecting your account also means never sharing your PIN, MPIN, OTP, CVV or password. Use only official Premier Bank channels.",
  },
};

const additionalCommunityAnswers: Record<"so" | "en", {
  sos: string;
  techAwards: string;
  safariAtm: string;
  atmUse: string;
  namedPos: string;
  walletNira: string;
  virtualManagement: string;
  walletEgypt: string;
  detailedAward: string;
  walletExtended: string;
  diaspora: string;
}> = {
  so: {
    sos: "Haa. Premier Bank waxay kafaalo qaadday qayb ka mid ah carruurta ku jirta SOS Soomaaliya. Taageerada la xusay waxaa ka mid ah kharashaadka nolosha, caafimaadka iyo waxbarashada; Dr. Mohamed Ghedi Jumale wuxuu sheegay in bangigu doonayo inuu sii wado ballanqaadka taageerada.",
    techAwards: "Haa. Premier Bank waxaa la siiyay Digital Banking Award kadib markii loo aqoonsaday bangigii ugu horreeyay dalka ee hirgeliyay ATM Cash Deposit Machine. Premier Wallet-na wuxuu helay Digital Wallet Advancement Award. Xogtan waa abaalmarinno taariikhi ah, mana aha offer hadda jira.",
    safariAtm: "Premier Bank ATM ayaa laga heli karaa Safari Resort Hotel ee Borama. Adeegyada la xusay waxaa ka mid ah lacag kala bixid, PIN beddelid iyo hubinta hadhaaga. Saacadaha iyo Cash Deposit-ka goobtan gaarka ah fadlan ka xaqiiji Premier Bank.",
    atmUse: "Si aad Premier Bank ATM u isticmaasho, geli kaarkaaga, dooro Soomaali ama Ingiriisi, geli PIN-kaaga si qarsoodi ah, kadibna dooro adeegga aad rabto sida lacag kala bixid, hubinta hadhaaga ama PIN beddelid. Ha la wadaagin PIN-kaaga qof kale.",
    namedPos: "Haa. Xogta la bixiyay waxay sheegaysaa in Premier POS laga isticmaali karo Hyderabad Biryani, Al Jazeera Hotel ee Gaalkacyo, iyo Jabir Plaza Hotel ee Bosaso. Premier Mastercard iyo Premier Tap ayaa sidoo kale lagu xusay lacag-bixinta meelahaas la taageero. Kuwani waa merchant examples oo keliya.",
    walletNira: "Mohamed Ali Adam waa Head of Digital Banking - Premier Wallet. NIRA-Huubiye iyo eKYC waxaa laga wada hadlay sidii aqoonsiga dijitaalka ah loogu xiriirin lahaa adeegyada maaliyadeed. Faahfaahinta farsamada iyo helitaanka hadda jira fadlan ka xaqiiji Premier Bank.",
    virtualManagement: "Premier Virtual Card waa kaar dijitaal ah, mana aha physical card. Waxaa lagu isticmaali karaa adeegyada online-ka ee la taageero sida Netflix, Spotify iyo Google Play. Waxaad ka samayn kartaa Premier Wallet ama Online Banking qaybta Cards/Virtual Card, waxaana app-ka laga maamuli karaa freeze/joojin iyo spending limit. Card number-ka, expiry-ga iyo CVV-gaaga ha la wadaagin cidna.",
    walletEgypt: "Haa. Wallet Send waxaad lacag ugu diri kartaa Masar. Gal Premier Wallet, dooro Wallet Send, kadib Send Remittance, oo dooro Egypt; haddii aanu markiiba muuqan, taabo Show more countries. Qadarka khidmadda saxda ah hadda ma hayo, sidaas darteed fadlan xaqiiji ka hor intaadan dirin.",
    detailedAward: "Xogta taariikhiga ah ee la bixiyay waxay sheegaysaa in Premier Bank Somalia Limited ay heshay Outstanding African Banking Brand Excellence Award 2025 intii lagu jiray 15th African Business Leadership Awards ee ALM Africa Summit, London. Waxaa lagu xusay bangiyada casriga ah, adeegyada dijitaalka, taageerada SME-yada, ethical banking iyo financial inclusion; Jibril Xasan Maxamed ayaa la sheegay inuu guddoomay. Premier Wallet-na wuxuu helay Best Mobile Money App of the Year 2025 oo Somali Business Awards bixisay, waxaana guddoomay Mohamed Ali Adam.",
    walletExtended: "Premier Wallet wuxuu taageeraa adeegyada la heli karo sida lacag-bixinta biyaha, waxbarashada, TV/Cable iyo caafimaadka; Wallet-to-Wallet iyo Wallet-to-Account transfers; Wallet Send remittances; merchant payments oo isticmaala QR Code ama Merchant ID; airtime top-up; currency exchange; iyo transaction history. QR Code iyo Merchant ID waxay khuseeyaan Merchant Payment, mana aha Wallet-to-Wallet transfer.",
    diaspora: "Diaspora Banking Account waa koonto loogu talagalay Soomaalida qurbaha ku nool si ay u maamulaan lacagtooda, u taageeraan qoysaskooda, u kaydsadaan una qorsheeyaan mustaqbalka. Xogta la bixiyay waxay sheegaysaa in dibadda laga furan karo adigoo adeegsanaya approved agency, adigoon Soomaaliya iman. Waxaa loo baahan karaa Passport ama National ID, foom codsi iyo dukumentiyo kale oo la dalbado. Liiska waddamada la taageero iyo shuruudaha hadda jira fadlan ka xaqiiji Premier Bank.",
  },
  en: {
    sos: "Yes. Premier Bank sponsored part of the children at SOS Somalia. The support mentioned includes living expenses, healthcare and education, and Dr. Mohamed Ghedi Jumale stated that the Bank intends to continue this support commitment.",
    techAwards: "Yes. Premier Bank received the Digital Banking Award after being recognised as the first bank in Somalia to implement an ATM Cash Deposit Machine. Premier Wallet received the Digital Wallet Advancement Award. These are historical awards, not current offers.",
    safariAtm: "A Premier Bank ATM is mentioned at Safari Resort Hotel in Borama. The stated services include cash withdrawal, PIN change and balance inquiry. Please confirm hours and Cash Deposit availability for this specific location with Premier Bank.",
    atmUse: "To use a Premier Bank ATM, insert your card, select Somali or English, enter your PIN privately, then choose the service you need, such as cash withdrawal, balance inquiry or PIN change. Never share your PIN with anyone.",
    namedPos: "The supplied information states that Premier POS can be used at Hyderabad Biryani, Al Jazeera Hotel in Gaalkacyo and Jabir Plaza Hotel in Bosaso. Premier Mastercard and Premier Tap are also mentioned for supported payments there. These are merchant examples only.",
    walletNira: "Mohamed Ali Adam is Head of Digital Banking - Premier Wallet. NIRA-Huubiye and eKYC have been discussed in relation to connecting digital identity with financial services. Please confirm technical details and current availability with Premier Bank.",
    virtualManagement: "Premier Virtual Card is digital, not a physical card. It can be used for supported online services such as Netflix, Spotify and Google Play. You can create it in Premier Wallet or Online Banking under Cards/Virtual Card and manage freeze controls and spending limits in the app. Never share your card number, expiry date or CVV.",
    walletEgypt: "Yes. You can send money to Egypt with Wallet Send. In Premier Wallet, choose Wallet Send, then Send Remittance, and select Egypt; use Show more countries if it is not immediately visible. I do not have the exact fee, so please confirm it before sending.",
    detailedAward: "The supplied historical information says Premier Bank Somalia Limited received the Outstanding African Banking Brand Excellence Award 2025 at the 15th African Business Leadership Awards during the ALM Africa Summit in London. The recognition cites modern banking, digital services, SME support, ethical banking and financial inclusion; Jibril Xasan Maxamed is mentioned as accepting it. Premier Wallet also received Best Mobile Money App of the Year 2025 from Somali Business Awards, accepted by Mohamed Ali Adam.",
    walletExtended: "Premier Wallet supports eligible water, education, TV/Cable and healthcare payments; Wallet-to-Wallet and Wallet-to-Account transfers; Wallet Send remittances; merchant payments through QR Code or Merchant ID; airtime top-up; currency exchange; and transaction history. QR Code and Merchant ID apply to Merchant Payment, not Wallet-to-Wallet transfer.",
    diaspora: "Diaspora Banking Account is designed for Somalis living abroad to manage money, support family, save and plan for the future. The supplied information says it can be opened from abroad through an approved agency without travelling to Somalia. A Passport or National ID, application form and other requested documents may be required. Please confirm the current supported-country list and requirements with Premier Bank.",
  },
};

const focusedAnswers = {
  so: {
    accounts: "Premier Bank waxay bixisaa Personal Current Account, Salary Account, Diaspora Banking Account, Corporate Current Account, Business Current Account, Umma Account, Personal Saving Accounts, Hajj/Umrah Account, iyo Student Savings Account.",
    accountDetail: "Premier Bank waxay leedahay noocyo accounts ah oo ay ka mid yihiin Salary, Student Savings, Hajj/Umrah, Umma, Business Current, Corporate Current, iyo Personal Saving Accounts. Ii sheeg account-ka aad rabto si aan kuugu sharaxo xogta la heli karo.",
    visa: "Premier Bank waxay dukumentigeeda Diaspora Banking ku xustaa ATM Mastercard & Visa solutions. Premier POS-na waxay aqbashaa Visa iyo Mastercard. Nooca Visa card ee gaar ahaan la bixinayo iyo shuruudihiisa hadda ma hayo; fadlan nala soo xiriir si aan kuu siino faahfaahin sax ah.",
    fee: "Khidmaddu waxay ku xiran tahay adeegga iyo nooca transfer-ka. Fadlan nala soo xiriir si aan kuu siino khidmada saxda ah ee adeegga aad rabto: +252 61 7771000, +252 63 3800017, ama info@premierbank.so.",
    international: "Premier Bank waxay ku taageertaa lacag diris iyo qaadasho caalami ah iyada oo loo marayo SWIFT. Haddii aad lacag u dirayso China ama waddan kale, adeeggu wuxuu ku xiran yahay habka transfer-ka iyo shuruudaha khuseeya. Khidmadaha, xuduudaha, iyo wakhtiga habaynta hadda ma hayo; fadlan nala soo xiriir si aan kuu siino faahfaahinta saxda ah.",
    online: "Haa. Premier Mastercard waxaa loo isticmaali karaa purchases iyo payments online meelaha Mastercard laga aqbalo. Amazon, Alibaba, ama merchant gaar ah wuxuu ku xiran yahay inuu aqbalo Mastercard iyo shuruudaha merchant-ka.",
    walletFeature: "Premier Wallet wuxuu kuu oggolaanayaa inaad lacag dirto, biilal bixiso, airtime ku shubato, oo aad maamusho maaliyaddaada adigoo moobilkaaga ka adeegsanaya. Haddii aad rabto habka saxda ah ee feature gaar ah, fadlan nala soo xiriir.",
  },
  en: {
    accounts: "Premier Bank offers Personal Current Account, Salary Account, Diaspora Banking Account, Corporate Current Account, Business Current Account, Umma Account, Personal Saving Accounts, Hajj/Umrah Account, and Student Savings Account.",
    accountDetail: "Premier Bank offers account options including Salary, Student Savings, Hajj/Umrah, Umma, Business Current, Corporate Current, and Personal Saving Accounts. Tell me which account interests you and I can share the available information.",
    visa: "Premier Bank's Diaspora Banking information includes ATM Mastercard and Visa solutions, and Premier POS accepts Visa and Mastercard. I do not have the specific Visa card product or eligibility details at the moment; please contact us for accurate guidance.",
    fee: "The fee depends on the service and type of transfer. Please contact us for the exact fee for the service you need: +252 61 7771000, +252 63 3800017, or info@premierbank.so.",
    international: "Premier Bank supports sending and receiving international payments through SWIFT. For China or another country, availability depends on the transfer method and applicable requirements. I do not have the exact fees, limits, or processing times at the moment; please contact us for the correct details.",
    online: "Yes. Premier Mastercard can be used for online purchases and payments where Mastercard is accepted. For Amazon, Alibaba, or another specific merchant, availability depends on that merchant accepting Mastercard and its payment requirements.",
    walletFeature: "Premier Wallet lets you send money, pay bills, top up airtime, and manage your finances through your mobile device. For the exact steps for a particular feature, please contact us.",
  },
} as const;

const accountDetails = [
  { aliases: ["salary account", "salary akoon", "mshahara"], so: "Salary Account waxaa loogu talagalay dadka hela mushahar joogto ah oo doonaya inay account-ka u isticmaalaan baahiyahooda maalinlaha ah.", en: "Salary Account is designed for customers who earn a regular salary and want an account for everyday banking needs." },
  { aliases: ["student account", "student savings", "arday"], so: "Student Savings Account waa account kayd oo la awoodi karo, kana caawiya ardayda inay yeeshaan dhaqanka kaydka.", en: "Student Savings Account is an affordable savings account designed to encourage a saving culture among students." },
  { aliases: ["hajj", "umrah"], so: "Hajj/Umrah Account wuxuu kuu oggolaanayaa inaad u kaydsato ujeeddo gaar ah oo Hajj ama Umrah ah.", en: "Hajj/Umrah Account helps you save for the special purpose of Hajj or Umrah." },
  { aliases: ["business current", "business account"], so: "Business Current Account waa account firfircoon oo loo qorsheeyey baahiyaha ganacsiyada yaryar.", en: "Business Current Account is a dynamic account designed around small-business needs." },
  { aliases: ["corporate current", "corporate account"], so: "Corporate Current Account waa account loogu talagalay baahiyaha ganacsiyada iyo xiriirrada maaliyadeed ee corporate-ka.", en: "Corporate Current Account is designed for business banking relationships and corporate needs." },
  { aliases: ["umma account", "umma"], so: "Umma Account waa mid ka mid ah account-yada Premier Bank. Faahfaahinta gaarka ah hadda ma hayo; fadlan nala soo xiriir si aan kuu siino macluumaad dheeraad ah.", en: "Umma Account is one of Premier Bank's account options. I do not have its specific features at the moment; please contact us for more information." },
] as const;

function getSpecificAccountAnswer(question: string, language: ChatLanguage) {
  if (language !== "so" && language !== "en") return null;
  const normalized = normalizeQuestion(question);
  const match = accountDetails.find((account) => account.aliases.some((alias) => normalized.includes(normalizeQuestion(alias))));
  return match ? match[language] : null;
}

const nearestBranchAnswers: Record<"so" | "en", string> = {
  so: "Banaadir/Muqdisho waxaa ku jira Bakaaro, Zoobe (Km5), Taleex, Huriwa, Suuq-Bacaad, Dekadda, Sanca, Bacadlaha, Airport, Hamar-Weyne, Dahablaha, Madina, HawlWadag, Airport-road, Ceelasha, Kaaraan, iyo Darusalaam. Masaafadda saxda ah lama xisaabin karo anigoon helin goobtaada saxda ah; Branch Locator-ka ka dooro meesha kuugu dhow.",
  en: "Mogadishu/Banaadir includes Bakaaro, Zoobe (Km5), Taleex, Huriwa, Suuq-Bacaad, Dekadda, Sanca, Bacadlaha, Airport, Hamar-Weyne, Dahablaha, Madina, HawlWadag, Airport-road, Ceelasha, Kaaraan, and Darusalaam. I cannot calculate the exact nearest branch without your precise location; use the Branch Locator to choose the closest one on the map.",
};

const branchCoverage: Record<ChatLanguage, { somalia: string; hargeisa: string; all: string }> = {
  so: {
    somalia: "Haa. Branch Locator-ka Premier Bank wuxuu muujinayaa laamo ku yaal Soomaaliya, sidoo kale wuxuu leeyahay locations Kenya. Faahfaahinta cinwaanada iyo khariidadda ka eeg Branch Locator.",
    hargeisa: "Haa. Xogta Branch Locator-ka Premier Bank waxay ka kooban tahay locations Hargeisa. Si aad u aragto laanta saxda ah, khariidadda, iyo directions, isticmaal Branch Locator.",
    all: "Premier Bank Branch Locator wuxuu ka kooban yahay locations Soomaaliya iyo Kenya. Waxaad ku raadin kartaa magaca laanta, magaalada, ama goobta; kadibna khariidadda iyo directions-ka ayaad ka arki kartaa.",
  },
  en: {
    somalia: "Yes. Premier Bank's Branch Locator shows locations in Somalia and also includes locations in Kenya. Use the Branch Locator for the current address and map details.",
    hargeisa: "Yes. Premier Bank's Branch Locator includes Hargeisa locations. Use the Branch Locator to see the current branch, map, and directions.",
    all: "Premier Bank's Branch Locator includes locations in Somalia and Kenya. You can search by branch name, city, or location and view the map and directions.",
  },
  sw: {
    somalia: "Ndiyo. Branch Locator ya Premier Bank inaonyesha maeneo nchini Somalia na Kenya. Tumia Branch Locator kwa anuani na ramani ya sasa.",
    hargeisa: "Ndiyo. Branch Locator ya Premier Bank ina maeneo ya Hargeisa. Tumia Branch Locator kuona tawi, ramani na maelekezo.",
    all: "Branch Locator ya Premier Bank ina maeneo Somalia na Kenya. Unaweza kutafuta kwa jina la tawi, jiji au eneo na kuona ramani na maelekezo.",
  },
  am: {
    somalia: "አዎ። Premier Bank Branch Locator በሶማሊያ እና በኬንያ ያሉ ቦታዎችን ያሳያል። ለወቅታዊ አድራሻ እና ካርታ Branch Locatorን ይጠቀሙ።",
    hargeisa: "አዎ። Premier Bank Branch Locator የHargeisa ቦታዎችን ያካትታል። ቅርንጫፉን፣ ካርታውን እና መመሪያውን በBranch Locator ይመልከቱ።",
    all: "Premier Bank Branch Locator በሶማሊያ እና በኬንያ ያሉ ቦታዎችን ያካትታል።",
  },
  zh: {
    somalia: "是的。Premier Bank 的 Branch Locator 显示索马里地点，也包含肯尼亚地点。请使用 Branch Locator 查看最新地址和地图。",
    hargeisa: "是的。Premier Bank 的 Branch Locator 包含 Hargeisa 地点。请使用 Branch Locator 查看网点、地图和路线。",
    all: "Premier Bank 的 Branch Locator 包含索马里和肯尼亚的地点；可按网点名称、城市或地点搜索并查看地图和路线。",
  },
  tr: {
    somalia: "Evet. Premier Bank Branch Locator Somali ve Kenya'daki konumları gösterir. Güncel adres ve harita ayrıntıları için Branch Locator'ı kullanın.",
    hargeisa: "Evet. Premier Bank Branch Locator Hargeisa konumlarını içerir. Şubeyi, haritayı ve yol tarifini görmek için Branch Locator'ı kullanın.",
    all: "Premier Bank Branch Locator Somali ve Kenya'daki konumları içerir. Şube adı, şehir veya konuma göre arama yapabilir; harita ve yol tarifini görebilirsiniz.",
  },
};

const courtesyResponses: Record<ChatLanguage, { thanks: string; farewell: string }> = {
  so: { thanks: "Adigaa mudan. Maxaan kale kaa caawin karaa?", farewell: "Nabad gelyo. Waad ku mahadsan tahay inaad la xiriirtay Premier Bank." },
  en: { thanks: "You're welcome. Is there anything else I can help with?", farewell: "Goodbye, and thank you for contacting Premier Bank." },
  sw: { thanks: "Karibu. Ninaweza kukusaidia na jambo lingine?", farewell: "Kwaheri, na asante kwa kuwasiliana na Premier Bank." },
  am: { thanks: "እንኳን ደህና መጡ። በሌላ ነገር ልርዳዎ?", farewell: "ደህና ይቆዩ፣ Premier Bankን ስለተገናኙ እናመሰግናለን።" },
  zh: { thanks: "不客气。还有什么可以帮助您的吗？", farewell: "再见，感谢您联系 Premier Bank。" },
  tr: { thanks: "Rica ederim. Başka nasıl yardımcı olabilirim?", farewell: "Hoşça kalın; Premier Bank ile iletişime geçtiğiniz için teşekkür ederiz." },
};

const somaliIntentResponseVariations: Record<string, readonly string[]> = {
  mastercardPrice: [
    "Premier Mastercard waxaa lagu heli karaa $2.",
    "Qiimaha Premier Mastercard waa $2.",
    "Waxaad Premier Mastercard ku heli kartaa $2 oo keliya.",
    "Premier Mastercard-ka waxaa lagu dalban karaa $2.",
    "Kharashka lagu helo Premier Mastercard waa $2.",
  ],
  mastercardOnline: [
    "Haa, Premier Mastercard waxaa loogu adeegsan karaa lacag-bixinnada online-ka ah ee aqbala Mastercard.",
    "Waxaad Premier Mastercard ku samayn kartaa online payment meelaha Mastercard laga aqbalo.",
    "Premier Mastercard waxaad uga adeegsan kartaa websites-ka iyo adeegyada online-ka ah ee aqbala Mastercard.",
    "Kaarka Premier Mastercard wuxuu kuu sahlayaa inaad online wax kaga bixiso meelaha la taageero.",
    "Internet-ka ayaad wax kaga bixin kartaa Premier Mastercard haddii website-ku aqbalo Mastercard.",
  ],
  premierTap: [
    "Premier Tap waa hab lacag-bixineed casri ah oo kuu sahlaya inaad hal taabasho ku bixiso goobaha la taageero.",
    "Premier Tap wuxuu kuu fududeynayaa lacag-bixin degdeg ah, ammaan ah, oo contactless ah.",
    "Waxaad Premier Tap ku bixin kartaa si fudud adigoo adeegsanaya hal taabasho.",
    "Premier Tap waa adeeg lacag-bixineed oo casri ah oo loogu talagalay fudeyd iyo xawaare.",
    "Premier Tap wuxuu kaa caawinayaa inaad lacagta si fudud oo degdeg ah ugu bixiso goobaha adeeggu taageero.",
  ],
  walletSend: [
    "Wallet Send waa adeeg kuu sahlaya inaad lacag u dirto in ka badan 110 dal.",
    "Haa, Wallet Send waxaad lacag ugu diri kartaa in ka badan 110 dal.",
    "Premier Wallet Send wuxuu kuu fududeynayaa lacag-dirista caalamiga ah adigoo meel kasta jooga.",
    "Wallet Send waxaad lacag ugu diri kartaa Bank Accounts, Mobile Wallets iyo Cash Pickup, iyadoo habka la heli karo ku xiran yahay.",
    "Waa adeeg lacag-dirid caalami ah oo gaara in ka badan 110 dal.",
  ],
  virtualCard: [
    "Premier Virtual Card waa kaar dijitaal ah oo loogu talagalay lacag-bixinnada online-ka.",
    "Waa kaar digital ah oo kuu sahlaya inaad internet-ka wax kaga bixiso adeegyada aqbala kaarka.",
    "Premier Virtual Card wuxuu kuu fududeynayaa lacag-bixinnada online-ka ah adigoo meel kasta jooga.",
    "Premier Bank wuxuu leeyahay Virtual Card loogu talagalay online payments-ka la taageero.",
    "Premier Virtual Card waa xal fudud oo loogu talagalay lacag-bixinnada online-ka.",
  ],
  chatgptPayment: [
    "Waxaad Premier Virtual Card ugu adeegsan kartaa lacag-bixinta adeegyada digital-ka ah sida ChatGPT.",
    "Premier Virtual Card waxaa loogu talagalay online payments sida adeegyada digital-ka ah ee aqbala kaarka.",
    "Waxaad ChatGPT subscription-ka ku bixin kartaa Premier Virtual Card haddii adeeggu aqbalo kaarka.",
    "Premier Virtual Card wuxuu kuu sahlayaa inaad bixiso adeegyada online-ka sida ChatGPT.",
    "Si aad ChatGPT ugu bixiso, waxaad isticmaali kartaa Premier Virtual Card.",
  ],
  walletManager: [
    "Premier Wallet Manager wuxuu kuu fududeynayaa maaraynta iyo bixinta mushaarka shaqaalaha.",
    "Ganacsiyada waxay Premier Wallet Manager ugu adeegsan karaan bixinta mushaaraadka shaqaalaha.",
    "Premier Wallet Manager waxaa loogu talagalay maaraynta mushaarka shaqaalaha.",
    "Adeeggan wuxuu fududeeyaa bixinta mushaharka shaqaalaha waqtigiisa.",
    "Premier Wallet Manager waa xal casri ah oo ganacsiyada ka caawiya payroll-ka.",
  ],
  universityPayment: [
    "Premier Wallet wuxuu kuu fududeynayaa inaad lacagta waxbarashada bixiso adigoo meel kasta jooga.",
    "Waxaad Premier Wallet ku bixin kartaa lacagta jaamacadaha adeegga taageera.",
    "Premier Wallet wuxuu ardayda ka caawiyaa bixinta tuition fee-ga si fudud.",
    "Waxaad lacagta waxbarashada ku bixin kartaa Premier Wallet halkii aad saf dheer geli lahayd.",
    "Haddii jaamacaddu adeegga taageerto, waxaad Premier Wallet ku bixin kartaa lacagta waxbarashada.",
  ],
  hargeisaAtm: [
    "ATM-ka Premier Bank waxaad ka heli kartaa SERENE SAROVAR Hotel, Hargeysa.",
    "Premier Bank ATM wuxuu ku yaal SERENE SAROVAR Hotel ee Hargeysa.",
    "Hargeysa waxaad Premier Bank ATM ka heli kartaa SERENE SAROVAR Hotel.",
    "Mid ka mid ah ATM-yada xogta lagu hayo wuxuu ku yaal SERENE SAROVAR Hotel, Hargeysa.",
    "Haa, Premier Bank ATM waxaad ka heli kartaa SERENE SAROVAR Hotel, Hargeysa.",
  ],
  worldElite: [
    "Premier World Elite Mastercard waa kaar loogu talagalay macaamiisha doonaya adeegyo heer sare ah iyo faa'iidooyin safar.",
    "World Elite Mastercard wuxuu ku siinayaa adeegyo VIP ah oo la xiriira safarrada caalamiga ah.",
    "Kaar-kan waxaa ka mid ah faa'iidooyin sida adeegyada lounge-yada garoomada diyaaradaha ee la taageero.",
    "Premier World Elite Mastercard wuxuu ku habboon yahay dadka safarrada caalamiga ah gala.",
    "Waa kaar premium ah oo diiradda saaraya khibrad safar iyo adeegyo VIP leh.",
  ],
  walletBalance: [
    "Haraagaaga waxaad ka hubin kartaa Premier Wallet-kaaga. Anigu ma arki karo balance-kaaga ama xogta koontadaada.",
    "Fur Premier Wallet si aad u aragto balance-kaaga. PIN, MPIN ama OTP ha ila wadaagin.",
    "Balance-kaagu waa xog gaar ah; ka hubi gudaha Premier Wallet, aniguna ma geli karo koontadaada.",
  ],
  walletMerchant: [
    "Gal Premier Wallet oo hoose ka dooro Pay. Scan garee QR Code-ka merchant-ka ama geli Merchant ID, kadib hubi magaca ganacsiga iyo qadarka ka hor dirista.",
    "Maqaaxi ama dukaan taageera Premier Wallet: fur Pay ee hoose, scan garee QR-ga ama geli Merchant ID, magaca hubi, kadibna geli qadarka oo dir.",
    "Merchant payment-ka ku samee Pay gudaha Premier Wallet: QR Code scan ama Merchant ID geli, magaca ganacsadaha xaqiiji, kadib lacagta dir.",
  ],
  walletToWallet: [
    "Haa, Premier Wallet wuxuu taageeraa Wallet-to-Wallet transfer.",
    "Waxaad lacagta Wallet-kaaga ugu diri kartaa Premier Wallet kale.",
    "Hubi qofka aad u dirayso iyo qadarka lacagta ka hor intaadan xaqiijin transfer-ka.",
  ],
  walletToBank: [
    "Haa, Premier Wallet wuxuu taageeraa Wallet-to-Bank Account transfer meelaha adeegga laga taageero.",
    "Waxaad lacagta Wallet-ka ugu diri kartaa Bank Account la taageero; hubi faahfaahinta qaataha ka hor xaqiijinta.",
    "Wallet-to-Bank transfer waa la taageeraa halka adeeggu ka jiro. Menu-ga saxda ah iyo khidmadaha ka hubi app-ka ama Premier Bank.",
  ],
  walletTransactionProblem: [
    "Marka hore ka hubi transaction status-ka Premier Wallet. Ha ku celin lacag-dirista ilaa aad xaqiijiso kii hore.",
    "Haddii lacagta laga jaray laakiin aysan gaarin, kaydi transaction reference-ka haddii uu muuqdo kadibna la xiriir Premier Bank.",
    "Pending ama failed transfer ha u dirin mar kale isla markiiba; ka hubi Wallet-kaaga ama la xiriir Premier Bank.",
  ],
  walletLogin: [
    "Hubi internet-kaaga iyo in Premier Wallet app-ku yahay nooca ugu dambeeya. Isticmaal recovery-ga rasmiga ah haddii loo baahdo.",
    "Haddii login-ka ama MPIN-ku ku diido, ha la wadaagin MPIN-kaaga; isticmaal recovery-ga rasmiga ah ama nala soo xiriir.",
    "App-ka oo aan furmin, hubi connection-ka iyo update-ka app-ka, kadibna la xiriir Premier Bank haddii dhibaatadu sii socoto.",
  ],
  bankOverview: [
    "Premier Bank waa bangi bixiya koontooyin, Mastercard, Premier Wallet, lacag-dirid, ATM, POS iyo adeegyo dijitaal ah.",
    "Waxaad Premier Bank ka heli kartaa adeegyo bangi iyo lacag-bixin, oo ay ku jiraan Premier Wallet, kaarar, ATM iyo POS.",
    "Premier Bank wuxuu macaamiisha siiyaa koontooyin iyo adeegyo dijitaal ah sida Premier Wallet, Mastercard, transfers, ATM iyo POS.",
  ],
  exchangeRate: [
    "Sarifka maanta waa xog isbeddelaysa; ka hubi Premier Wallet ama Premier Bank ka hor transaction-ka.",
    "Ma qiyaasi karo exchange rate-ka hadda jira. Fadlan ka hubi adeegga rasmiga ah waqtiga transaction-ka.",
    "Si aad u hesho rate sax ah, ka hubi Premier Wallet ama Premier Bank isla waqtiga aad sarifka samaynayso.",
  ],
  bookingTravel: [
    "Premier Mastercard waxaa loogu adeegsan karaa adeegyada online-ka ah ee aqbala Mastercard sida Booking.com iyo Trip.com.",
    "Waxaad Premier Mastercard uga adeegsan kartaa adeegyada safarka ee online-ka ah ee aqbala Mastercard.",
    "Waxaad kaarka ku samayn kartaa hotel booking iyo adeegyo safar oo online ah meelaha Mastercard laga aqbalo.",
    "Premier Mastercard wuxuu kuu fududeynayaa lacag-bixinnada adeegyada safarka ee online-ka.",
    "Booking.com, Trip.com iyo adeegyada kale ee aqbala Mastercard ayaad kaarka ku isticmaali kartaa.",
  ],
};

function selectIntentResponse(language: ChatLanguage, intent: string, fallback: string) {
  const options = language === "so" ? somaliIntentResponseVariations[intent] : undefined;
  return options ? options[Math.floor(Math.random() * options.length)] : fallback;
}

export function getLocalizedFallback(language: ChatLanguage) { return localized[language].fallback; }
export function getSecurityMessage(language: ChatLanguage) { return localized[language].security; }

export function getVerifiedQuickAnswer(question: string, language: ChatLanguage = "so"): string | null {
  const normalized = normalizeQuestion(question);
  const text = question.toLocaleLowerCase();
  const messages = localized[language];
  const focused = language === "so" || language === "en" ? focusedAnswers[language] : null;

  if (startsWithAnyPhrase(question, ["asc", "asalaamu alaikum", "asalaamu calaykum", "asalamu alaikum", "wcs", "hi", "hello", "good morning", "good afternoon", "good evening", "subax wanaagsan", "galab wanaagsan", "habeen wanaagsan", "jambo", "habari", "habari za asubuhi", "habari za mchana", "habari za jioni", "merhaba", "günaydın", "gunaydin", "iyi günler", "iyi gunler", "iyi akşamlar", "iyi aksamlar", "你好", "下午好", "早上好", "晚上好", "ሰላም", "እንደምን አላችሁ"])) return messages.greeting;
  if (startsWithAnyPhrase(question, ["asante", "thank you", "thanks", "mahadsanid", "waad mahadsan tahay"])) return courtesyResponses[language].thanks;
  if (startsWithAnyPhrase(question, ["kwa heri", "bye", "goodbye", "nabad gelyo"])) return courtesyResponses[language].farewell;
  if (startsWithAnyPhrase(question, ["kwr", "kawran", "kawaran", "xld", "xaalad", "xaalka sidee yahay", "sidee tahay", "how are you"])) return messages.wellbeing;
  if (text.includes("maxaad iga caawin") || text.includes("maxaan kaa caawin") || includesAny(question, ["what can you help", "what do you do", "unaweza kusaidia", "yardım", "可以帮助"])) return messages.capabilities;
  if (includesAny(question, ["kuhadal", "speak", "language", "lugha", "dil", "语言", "ቋንቋ"])) return messages.acknowledgement;
  if (isSeniorManagementQuestion(question)) return getSeniorManagementAnswer(question, language);
  if (isHaleelQuestion(question)) return getHaleelAnswer(question, language);
  const facebook = language === "so" || language === "en" ? facebookQuickAnswers[language] : null;
  const expanded = language === "so" || language === "en" ? expandedServiceAnswers[language] : null;
  const community = language === "so" || language === "en" ? communityAndLocationAnswers[language] : null;
  const additional = language === "so" || language === "en" ? additionalCommunityAnswers[language] : null;
  const walletTraining = language === "so" || language === "en" ? walletTrainingAnswers[language] : null;
  const common = language === "so" || language === "en" ? commonCustomerAnswers[language] : null;
  const supplied = language === "so" || language === "en" ? suppliedServiceAnswers[language] : null;
  if (isBankOverviewQuestion(question) && common) return selectIntentResponse(language, "bankOverview", common.bankOverview);
  if (isCardProblemQuestion(question) && common) return common.cardProblem;
  if (isExchangeRateQuestion(question) && common) return selectIntentResponse(language, "exchangeRate", common.exchangeRate);
  if (isBankSecurityQuestion(question) && common) return common.security;
  if (!common && (isBankOverviewQuestion(question) || isCardProblemQuestion(question) || isExchangeRateQuestion(question) || isBankSecurityQuestion(question))) return null;
  if (isWalletTransactionProblemQuestion(question) && walletTraining) return selectIntentResponse(language, "walletTransactionProblem", walletTraining.transactionProblem);
  if (isWalletLoginQuestion(question) && walletTraining) return selectIntentResponse(language, "walletLogin", walletTraining.login);
  if (isForgotMpinQuestion(question) && walletTraining) return walletTraining.forgotMpin;
  if (isChangeMpinQuestion(question) && walletTraining) return walletTraining.changeMpin;
  if (isForgotPasswordQuestion(question) && walletTraining) return walletTraining.forgotPassword;
  if (isChangePasswordQuestion(question) && walletTraining) return walletTraining.changePassword;
  if (isWalletPinHelpQuestion(question) && walletTraining) return walletTraining.pinHelp;
  if (isBiometricsQuestion(question) && walletTraining) return walletTraining.biometrics;
  if (isMyQrQuestion(question) && walletTraining) return walletTraining.myQr;
  if (isAccountBalanceMobileBankingQuestion(question) && walletTraining) return walletTraining.accountBalanceMobile;
  if (isViewDigitalCardQuestion(question) && walletTraining) return walletTraining.viewDigitalCard;
  if (isCardManagementQuestion(question) && walletTraining) return walletTraining.cardManagement;
  if (isMultipleCardsQuestion(question) && walletTraining) return walletTraining.multipleCards;
  if (isWalletProfilePhotoQuestion(question) && walletTraining) return walletTraining.profilePhoto;
  if (isVirtualCardFundingQuestion(question) && walletTraining) return walletTraining.virtualFunding;
  if (isMastercardFundingQuestion(question) && walletTraining) return walletTraining.mastercardFunding;
  if (isBankToWalletQuestion(question) && walletTraining) return walletTraining.bankToWallet;
  if (isWalletToBankQuestion(question) && walletTraining) return selectIntentResponse(language, "walletToBank", walletTraining.walletToBank);
  if (isShortWalletTransferQuestion(question) && walletTraining) return selectIntentResponse(language, "walletToWallet", walletTraining.walletToWallet);
  if (isAgentWalletDepositQuestion(question) && walletTraining) return walletTraining.agentDeposit;
  if (isWalletMerchantPaymentQuestion(question) && walletTraining) return selectIntentResponse(language, "walletMerchant", walletTraining.merchantPayment);
  if (isWalletBalanceQuestion(question) && walletTraining) return selectIntentResponse(language, "walletBalance", walletTraining.balance);
  if (isWalletHistoryQuestion(question) && walletTraining) return walletTraining.history;
  if (!walletTraining && (isWalletTransactionProblemQuestion(question) || isWalletLoginQuestion(question) || isForgotMpinQuestion(question) || isChangeMpinQuestion(question) || isForgotPasswordQuestion(question) || isChangePasswordQuestion(question) || isWalletPinHelpQuestion(question) || isBiometricsQuestion(question) || isMyQrQuestion(question) || isAccountBalanceMobileBankingQuestion(question) || isViewDigitalCardQuestion(question) || isCardManagementQuestion(question) || isMultipleCardsQuestion(question) || isWalletProfilePhotoQuestion(question) || isVirtualCardFundingQuestion(question) || isMastercardFundingQuestion(question) || isBankToWalletQuestion(question) || isWalletToBankQuestion(question) || isShortWalletTransferQuestion(question) || isAgentWalletDepositQuestion(question) || isWalletMerchantPaymentQuestion(question) || isWalletBalanceQuestion(question) || isWalletHistoryQuestion(question))) return null;
  if (isSosSupportDetailQuestion(question) && additional) return additional.sos;
  if (isSomaliTechAwardDetailQuestion(question) && additional) return additional.techAwards;
  if (isSafariBoramaAtmQuestion(question) && additional) return additional.safariAtm;
  if (isAtmUsageQuestion(question) && additional) return additional.atmUse;
  if (isNamedPosMerchantQuestion(question) && additional) return additional.namedPos;
  if (isWalletNiraQuestion(question) && additional) return additional.walletNira;
  if (isVirtualCardManagementQuestion(question) && additional) return additional.virtualManagement;
  if (isWalletEgyptQuestion(question) && additional) return additional.walletEgypt;
  if (isDetailedAwardQuestion(question) && additional) return additional.detailedAward;
  if (isWalletExtendedServicesQuestion(question) && additional) return additional.walletExtended;
  if (isDiasporaAccountDetailQuestion(question) && additional) return additional.diaspora;
  if (!additional && (isSosSupportDetailQuestion(question) || isSomaliTechAwardDetailQuestion(question) || isSafariBoramaAtmQuestion(question) || isAtmUsageQuestion(question) || isNamedPosMerchantQuestion(question) || isWalletNiraQuestion(question) || isVirtualCardManagementQuestion(question) || isWalletEgyptQuestion(question) || isDetailedAwardQuestion(question) || isWalletExtendedServicesQuestion(question) || isDiasporaAccountDetailQuestion(question))) return null;
  if (isMastercardCampaignQuestion(question) && facebook) return facebook.campaign;
  if (isMastercardPriceQuestion(question) && supplied) return selectIntentResponse(language, "mastercardPrice", supplied.mastercardPrice);
  if (isMastercardTravelBookingQuestion(question) && supplied) return selectIntentResponse(language, "bookingTravel", supplied.mastercardBooking);
  if (isDigitalSubscriptionPaymentQuestion(question) && supplied) return selectIntentResponse(language, "chatgptPayment", supplied.virtualSubscription);
  if (isWorldEliteQuestion(question) && supplied) return selectIntentResponse(language, "worldElite", supplied.worldElite);
  if (isWalletManagerQuestion(question) && supplied) return selectIntentResponse(language, "walletManager", supplied.walletManager);
  if (isSereneAtmQuestion(question) && supplied) return selectIntentResponse(language, "hargeisaAtm", supplied.sereneAtm);
  if (isHargeisaAtmQuestion(question) && supplied) return selectIntentResponse(language, "hargeisaAtm", supplied.sereneAtm);
  if (isPremierPosNamedLocationQuestion(question) && supplied) return supplied.posLocations;
  if (isBestServiceAwardQuestion(question) && supplied) return supplied.bestServiceAward;
  if (isLeapProgramQuestion(question) && supplied) return supplied.leap;
  if (isWalletSendCupQuestion(question) && supplied) return supplied.walletSendCup;
  if (!supplied && (isMastercardPriceQuestion(question) || isMastercardTravelBookingQuestion(question) || isDigitalSubscriptionPaymentQuestion(question) || isWorldEliteQuestion(question) || isWalletManagerQuestion(question) || isSereneAtmQuestion(question) || isPremierPosNamedLocationQuestion(question) || isBestServiceAwardQuestion(question) || isLeapProgramQuestion(question) || isWalletSendCupQuestion(question))) return null;
  if (isCommunityCsrQuestion(question) && community) return community.csr;
  if (isAwardsQuestion(question) && community) return community.awards;
  if (isKnownAtmLocationQuestion(question) && community) return community.atmLocation;
  if (isPremierPosQuestion(question) && community) return community.pos;
  if (isPosMerchantExampleQuestion(question) && community) return community.posMerchant;
  if (isNiraEkycQuestion(question) && community) return community.nira;
  if (isBankHistoryQuestion(question) && community) return community.history;
  if (isWalletDownloadQuestion(question) && expanded) return expanded.walletDownload;
  if (isWalletRegistrationQuestion(question) && expanded) return expanded.walletRegistration;
  if (isWalletTvBillQuestion(question) && expanded) return expanded.walletTvBill;
  if (isWalletBillPaymentQuestion(question) && expanded) return expanded.walletBill;
  if (isWalletTopUpQuestion(question) && expanded) return expanded.walletTopUp;
  if (isWalletWithdrawalQuestion(question) && expanded) return expanded.walletWithdrawal;
  if (isWalletExchangeQuestion(question) && expanded) return expanded.walletExchange;
  if (isWalletTransferQuestion(question) && expanded) return expanded.walletTransfer;
  if (isPaymentGatewayQuestion(question) && includesAny(question, ["video", "muqaal", "muuqaal", "tutorial", "daawo", "watch"])) {
    return language === "so"
      ? "Muuqaalka **Premier Payment Gateway - Ku Xidhnow Dunida, Lana Ganacso Macaamiishaada** halkan ka daawo: [Daawo muuqaalka Premier Payment Gateway](https://youtu.be/OkaOWVYy_4g)."
      : "Watch the **Premier Payment Gateway - Connect to the World and Trade with Your Customers** video here: [Watch the Premier Payment Gateway video](https://youtu.be/OkaOWVYy_4g).";
  }
  if (isPaymentGatewayQuestion(question) && expanded) return expanded.paymentGateway;
  if (isAtmCashDepositQuestion(question) && expanded) return expanded.cashDeposit;
  if (isJabaneAtmQuestion(question) && expanded) return expanded.jabaneAtm;
  if (isVirtualCardQuestion(question) && facebook) return selectIntentResponse(language, "virtualCard", facebook.virtualCard);
  if (isPremierTapQuestion(question) && includesAny(question, ["video", "muqaal", "muuqaal", "tutorial", "daawo", "watch"])) {
    return language === "so"
      ? "Muuqaalka **Premier Tap - Habka Ugu Fudud Lacag Bixinta Casriga Ah** halkan ka daawo: [Daawo muuqaalka Premier Tap](https://youtu.be/KflE753vFpg)."
      : "Watch the **Premier Tap - A Simple Way to Make Modern Payments** video here: [Watch the Premier Tap video](https://youtu.be/KflE753vFpg).";
  }
  if (isPremierTapQuestion(question) && facebook) return selectIntentResponse(language, "premierTap", facebook.premierTap);
  if (isWalletSendQuestion(question) && facebook) return selectIntentResponse(language, "walletSend", facebook.walletSend);
  if (isWalletEducationBillQuestion(question) && expanded) return selectIntentResponse(language, "universityPayment", expanded.walletEducationBill);
  if (isSipsQuestion(question) && facebook) return facebook.sips;
  if (isSimadQuestion(question) && facebook) return facebook.simad;
  if (isVisaForumQuestion(question) && facebook) return facebook.visaForum;
  if (isHajjPaymentQuestion(question) && facebook) return facebook.hajj;
  // For a selected language without an on-device translation, route these
  // source-specific questions to the existing multilingual AI path instead of
  // replacing them with a generic Wallet or ATM response.
  if (!facebook && !expanded && (
    isCommunityCsrQuestion(question) || isAwardsQuestion(question) || isKnownAtmLocationQuestion(question) || isPremierPosQuestion(question) || isPosMerchantExampleQuestion(question) || isNiraEkycQuestion(question) || isBankHistoryQuestion(question) || isWalletDownloadQuestion(question) || isWalletRegistrationQuestion(question) || isWalletBillPaymentQuestion(question) || isWalletTopUpQuestion(question) || isWalletWithdrawalQuestion(question) || isWalletExchangeQuestion(question) || isWalletTransferQuestion(question) || isWalletTvBillQuestion(question) || isWalletEducationBillQuestion(question) || isPaymentGatewayQuestion(question) || isAtmCashDepositQuestion(question) || isJabaneAtmQuestion(question) || isVirtualCardQuestion(question) || isPremierTapQuestion(question) || isWalletSendQuestion(question) || isSipsQuestion(question) || isSimadQuestion(question) || isVisaForumQuestion(question) || isHajjPaymentQuestion(question) || isMastercardCampaignQuestion(question)
  )) return null;
  if (isTransferFeeQuestion(question) && focused) return focused.fee;
  if (isInternationalTransferQuestion(question) && focused) return focused.international;
  if ((isOnlineShoppingQuestion(question) || isOnlineCardQuestion(question)) && focused) return selectIntentResponse(language, "mastercardOnline", focused.online);
  if (isVisaQuestion(question) && focused) return focused.visa;
  if (isAccountTypesQuestion(question) && focused) return focused.accounts;
  const specificAccountAnswer = getSpecificAccountAnswer(question, language);
  if (specificAccountAnswer) return specificAccountAnswer;
  if (isSpecificAccountQuestion(question) && focused) return focused.accountDetail;
  if (isWalletFeatureQuestion(question) && focused) return focused.walletFeature;
  if (isCardlessWithdrawalQuestion(question)) return cardlessTranslations[language];
  if (isAtmQuestion(question)) return agentServiceTranslations[language].atm;
  if (isOnlineCardQuestion(question)) return serviceTranslations[language].onlineCard;
  if (isMastercardQuestion(question)) return agentServiceTranslations[language].mastercard;
  if (isWorkingHoursQuestion(question)) return serviceTranslations[language].hours;
  if (isSwiftQuestion(question)) return agentServiceTranslations[language].swift;
  if (isFinancingQuestion(question)) return agentServiceTranslations[language].financing;
  if (isNearestBranchQuestion(question) && (language === "so" || language === "en")) return nearestBranchAnswers[language];
  if (isBranchLocationQuestion(question) && isMogadishuQuestion(question) && isBranchCountQuestion(question)) return serviceTranslations[language].mogadishuCount;
  if (isBranchLocationQuestion(question) && isMogadishuQuestion(question)) return serviceTranslations[language].mogadishu;
  if (isBranchLocationQuestion(question) && includesAny(question, ["hargeisa", "hargaysa"])) return branchCoverage[language].hargeisa;
  if (isBranchLocationQuestion(question) && includesAny(question, ["somalia", "soomaaliya"])) return branchCoverage[language].somalia;
  if (isBranchLocationQuestion(question) && includesAny(question, ["xagee", "xaggee", "where", "locations", "xarumo", "laamaha", "matawi", "şubeler", "subeler", "分行", "ቅርንጫፎች"])) return branchCoverage[language].all;
  if (isBranchLocationQuestion(question)) return messages.branch;
  if (includesAny(question, ["document", "requirements", "shuruud", "dukumenti", "nyaraka", "belgeler", "资料", "ሰነዶች"]) && isAccountQuestion(question)) return accountOpeningTranslations[language];
  if (isOpeningAccountQuestion(question) && isAccountQuestion(question)) return accountOpeningTranslations[language];
  if (isAccountManagementQuestion(question)) return accountManagementTranslations[language];
  if (isAccountQuestion(question)) return agentServiceTranslations[language].current;
  if (isWalletQuestion(question)) return walletTranslations[language];
  if (isAgencyBankingQuestion(question)) return agentServiceTranslations[language].agency;
  if (normalized.includes("diaspora") && (normalized.includes("country") || normalized.includes("countries") || normalized.includes("supported"))) {
    if (language === "so") return "Diaspora Banking hadda waxaa loo heli karaa macaamiisha deggan USA, UK, iyo Kenya. Premier Bank waxay sheegtay in waddamo kale lagu dari doono. Faahfaahinta u-qalmitaanka iyo adeeggaaga gaarka ah, fadlan nala soo xiriir.";
    if (language === "en") return "Diaspora Banking is currently available to customers residing in the USA, UK, and Kenya. Premier Bank expects to add more countries. For eligibility and account-specific guidance, please contact us.";
  }
  if (isContactQuestion(question)) return messages.contact;
  return null;
}

export function getRelevantPageLinks(question: string, language: ChatLanguage): ChatPageLink[] {
  const normalized = normalizeQuestion(question);
  const text = question.toLowerCase();
  if (isKnownAtmLocationQuestion(question)) return [{ label: language === "so" ? "Fur Branch Locator" : "Open Branch Locator", href: "/branch-locator" }];
  if (isPremierPosQuestion(question)) return [{ label: language === "so" ? "Eeg adeegyada bangiga" : "View banking services", href: "/#banking-services" }];
  if (isPosMerchantExampleQuestion(question)) return [{ label: language === "so" ? "Eeg adeegyada bangiga" : "View banking services", href: "/#banking-services" }];
  if (isNiraEkycQuestion(question) || isCommunityCsrQuestion(question) || isAwardsQuestion(question) || isBankHistoryQuestion(question)) return [{ label: language === "so" ? "Nala soo xiriir" : "Contact Premier Bank", href: "/#contact" }];
  if (isWalletDownloadQuestion(question) || isWalletRegistrationQuestion(question) || isWalletBillPaymentQuestion(question) || isWalletTopUpQuestion(question) || isWalletWithdrawalQuestion(question) || isWalletExchangeQuestion(question) || isWalletTransferQuestion(question) || isWalletTvBillQuestion(question) || isWalletEducationBillQuestion(question)) return [{ label: language === "so" ? "Fur Premier Wallet" : "Open Premier Wallet", href: "/#premier-wallet" }];
  if (isPaymentGatewayQuestion(question)) return [{ label: language === "so" ? "Nala soo xiriir" : "Contact Premier Bank", href: "/#contact" }];
  if (isJabaneAtmQuestion(question) || isAtmCashDepositQuestion(question)) return [{ label: language === "so" ? "Fur Branch Locator" : "Open Branch Locator", href: "/branch-locator" }];
  if (isVirtualCardQuestion(question) || isPremierTapQuestion(question) || isWalletSendQuestion(question) || isSimadQuestion(question)) return [{ label: language === "so" ? "Eeg Premier Wallet" : "View Premier Wallet", href: "/#premier-wallet" }];
  if (isSipsQuestion(question)) return [{ label: language === "so" ? "Eeg adeegyada bangiga" : "View banking services", href: "/#banking-services" }];
  if (isVisaForumQuestion(question) || isMastercardCampaignQuestion(question) || isHajjPaymentQuestion(question)) return [{ label: language === "so" ? "Eeg Premier Mastercard" : "View Premier Mastercard", href: "/#mastercard" }];
  if (isNearestBranchQuestion(question)) return [{ label: language === "so" ? "Fur Branch Locator" : "Open Branch Locator", href: "/branch-locator" }];
  if (isBankingServicesQuestion(question)) return [{ label: language === "so" ? "Eeg adeegyada Premier Bank" : "View Premier Bank services", href: "/#banking-services" }];
  if (isInternationalBankingQuestion(question)) return [{ label: language === "so" ? "Wax badan ka ogow Diaspora Banking" : "Learn more about Diaspora Banking", href: "/personal-banking/diaspora-banking" }];
  if (isTransferFeeQuestion(question) || isInternationalTransferQuestion(question)) return [{ label: language === "so" ? "Wax badan ka ogow SWIFT" : "Learn more about SWIFT", href: "/#banking-services" }];
  if (isOnlineShoppingQuestion(question) || isVisaQuestion(question)) return [{ label: language === "so" ? "Eeg Premier Mastercard" : "View Premier Mastercard", href: "/#mastercard" }];
  if (isAccountTypesQuestion(question) || isSpecificAccountQuestion(question)) return [{ label: language === "so" ? "Eeg accounts-ka Premier Bank" : "View Premier Bank accounts", href: "/#accounts" }];
  if (isCardlessWithdrawalQuestion(question)) return [{ label: language === "so" ? "Eeg Current Account" : "View Current Account", href: "/personal-banking/current-account" }];
  if (isAtmQuestion(question)) return [{ label: language === "so" ? "Fur Branch Locator" : "Open Branch Locator", href: "/branch-locator" }];
  if (isSwiftQuestion(question)) return [{ label: language === "so" ? "Wax badan ka ogow SWIFT" : "Learn more about SWIFT", href: "/#banking-services" }];
  if (isMastercardQuestion(question) || isOnlineCardQuestion(question)) return [{ label: language === "so" ? "Eeg Premier Mastercard" : "View Premier Mastercard", href: "/#mastercard" }];
  if (isFinancingQuestion(question)) return [{ label: language === "so" ? "Eeg Financing" : "View Financing", href: "/#financing" }];
  if (isAccountManagementQuestion(question) || isAccountQuestion(question)) return [{ label: language === "so" ? "Eeg Current Account" : "View Current Account", href: "/personal-banking/current-account" }];
  if (isWalletQuestion(question)) return [{ label: language === "so" ? "Eeg Premier Wallet" : "View Premier Wallet", href: "/#premier-wallet" }];
  if (normalized.includes("diaspora")) return [{ label: language === "so" ? "Wax badan ka ogow Diaspora Banking" : "Learn more about Diaspora Banking", href: "/personal-banking/diaspora-banking" }];
  if (isAgencyBankingQuestion(question)) return [{ label: language === "so" ? "Wax badan ka ogow Agency Banking" : "Learn more about Agency Banking", href: "/#agency-banking" }];
  if (isBranchLocationQuestion(question)) return [{ label: language === "so" ? "Fur Branch Locator" : "Open Branch Locator", href: "/branch-locator" }];
  if (isContactQuestion(question)) return [{ label: language === "so" ? "Nala soo xiriir" : "Contact Premier Bank", href: "/#contact" }];
  return [];
}
