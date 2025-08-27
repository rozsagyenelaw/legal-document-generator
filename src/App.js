import React, { useState } from 'react';
import { Building, Users, Heart, FileText, DollarSign } from 'lucide-react';

function App() {
  const [selectedDocument, setSelectedDocument] = useState('llc');
  const [generatedDocument, setGeneratedDocument] = useState('');
  const [formData, setFormData] = useState({});

  const firmInfo = {
    name: "Law Offices of Rozsa Gyene",
    address: "450 N Brand Blvd, Suite 600",
    city: "Glendale, CA 91203",
    phone: "(818) 291-6217",
    email: "rozsagyenelaw@yahoo.com",
    hourlyRate: "$400/hour"
  };

  const documentTypes = [
    { id: 'llc', name: 'LLC Operating Agreement', icon: Users },
    { id: 'prenup', name: 'Prenuptial Agreement', icon: Heart },
    { id: 'contingency', name: 'Contingency Fee Agreement', icon: DollarSign },
    { id: 'corp', name: 'Corporation Formation', icon: Building },
    { id: 'retainer', name: 'CA Retainer Agreement', icon: FileText }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateDocument = () => {
    let template = '';
    
    switch (selectedDocument) {
      case 'llc':
        template = generateLLCDocument();
        break;
      case 'prenup':
        template = generatePrenupDocument();
        break;
      case 'contingency':
        template = generateContingencyDocument();
        break;
      case 'corp':
        template = generateCorpDocument();
        break;
      case 'retainer':
        template = generateRetainerDocument();
        break;
      default:
        template = 'Document type not found.';
    }
    
    setGeneratedDocument(template);
  };

  const generateLLCDocument = () => {
    return `
Limited Liability Company Agreement of ${formData.llcName || '[COMPANY NAME]'} LLC
A Limited Liability Company

This Limited Liability Company Agreement ("Agreement") of ${formData.llcName || '[COMPANY NAME]'} LLC, ("Company"), is executed and agreed to, for good and valuable consideration, by the undersigned members (individually, "Member" or collectively, "Members").

I. Formation.

(a) State of Formation. This Agreement is for ${formData.llcName || '[COMPANY NAME]'} LLC, a member-managed California limited liability company formed under and pursuant to California law.

(b) Operating Agreement Controls. To the extent that the rights or obligations of the Members, or the Company under provisions of this Agreement differ from what they would be under California law absent such a provision, this Agreement, to the extent permitted under California law, shall control.

(c) Primary Business Address. The location of the primary place of business of the Company is: ${formData.businessAddress || '[BUSINESS ADDRESS]'}, or such other location as shall be selected from time to time by the Members.

(d) Registered Agent and Office. The Company's initial agent ("Agent") for service of process is ${formData.registeredAgent || '[REGISTERED AGENT NAME]'}. The Agent's registered office is ${formData.agentAddress || '[AGENT ADDRESS]'}. The Company may change its registered office, its registered agent, or both, upon filing a statement with the California Secretary of State.

(e) No State Law Partnership. No provisions of this Agreement shall be deemed or construed to constitute a partnership (including, without limitation, a limited partnership) or joint venture, or any Member a partner or joint venturer of or with any other Member, for any purposes other than federal and state tax purposes.

II. Purposes and Powers.

(a) Purpose. The Company is created for the following business purpose: ${formData.businessPurpose || 'The purpose of the limited liability company is to engage in any lawful act or activity for which a limited liability company may be organized under the California Revised Uniform Limited Liability Company Act.'}.

(b) Powers. The Company shall have all of the powers of a limited liability company set forth under California law.

(c) Duration. The Company's term shall commence upon the filing of articles of organization and all other such necessary materials with the state of California. The Company will operate until terminated as outlined in this Agreement unless:
    (i) A majority of the Members vote to dissolve the Company;
    (ii) No Member of the Company exists, unless the business of the Company is continued in a manner permitted by California law;
    (iii) It becomes unlawful for either the Members or the Company to continue in business;
    (iv) A judicial decree is entered that dissolves the Company; or
    (v) Any other event results in the dissolution of the Company under federal or California law.

III. Members.

(a) Members. The Members of the Company and their membership interest at the time of adoption of this Agreement are as follows:
${formData.member1Name || '[MEMBER 1 NAME]'}, ${formData.member1Percentage || '50'} percent
${formData.member2Name || '[MEMBER 2 NAME]'}, ${formData.member2Percentage || '50'} percent

(b) Initial Contribution. Each Member shall make an initial contribution to the company. The initial contributions of each shall be as described in Attachment A, "Initial Contributions of the Members."

No Member shall be entitled to interest on their initial contribution. Except as expressly provided by this Agreement, or as required by law, no Member shall have any right to demand or receive the return of their initial contribution. Any modifications as to the signatories' respective rights as to the receipt of their initial contributions must be set forth in writing and signed by all interested parties.

(c) Limited Liability of the Members. Except as otherwise provided for in this Agreement or otherwise required by California law, no Member shall be personally liable for any acts, debts, liabilities or obligations of the Company beyond their respective initial contribution, including liability arising under a judgment, decree or order of a court. The Members shall look solely to the Company property for the return of their initial contribution, or value thereof, and if the Company property remaining after payment or discharge of the debts, liabilities or obligations of the Company is insufficient to return such initial contribution, or value thereof, no Member shall have any recourse against any other Member except as is expressly provided for by this Agreement or as otherwise allowed by law.

(d) Death, Incompetency, Resignation or Termination of a Member. Should a Member die, be declared incompetent, or withdraw from the Company by choice, the remaining Members will have the option to buy out that Member's membership interest in the Company. Should the Members agree to buy out the membership interest of the withdrawing Member, that interest shall be paid for equally by the remaining Members and distributed in equal amounts to the remaining Members. The Members agree to hire an outside firm to assess the value of the membership interest.

The Members will have 60 days to decide if they want to buy the membership interest together and disperse it equally. If all Members do not agree to buy the membership interest, individual Members will then have the right to buy the membership interest individually. If more than one Member requests to buy the remaining membership interest, the membership interest will be paid for and split equally among those Members wishing to purchase the membership interest. If all Members agree by unanimous vote, the Company may choose to allow a non-member to buy the membership interest thereby replacing the previous Member.

If no individual Member(s) finalize a purchase agreement by 60 days, the withdrawing Member, or their estate, may dispose of their membership interest however they see fit, subject to the limitations below. If a Member is a corporation, trust, partnership, limited liability company or other entity and is dissolved or terminated, the powers of that Member may be exercised by its legal representative or successor.

The name of the Company may be amended upon the written and unanimous vote of all Members if a Member withdraws, dies, is found incompetent, or is terminated.

(e) Creation or Substitution of New Members. Any Member may assign in whole or in part its membership interest only after granting their fellow Members the right of first refusal, as established above.

    (i) Entire transfer. If a Member transfers all of its membership interest, the transferee shall be admitted to the Company as a substitute Member upon its execution of an instrument signifying its Agreement to be bound by the terms and conditions of this Agreement. Such admission shall be deemed effective immediately upon the transfer, and, simultaneously, the transferor Member shall cease to be a Member of the Company and shall have no further rights or obligations under this Agreement.

    (ii) Partial transfer. If a Member transfers only a portion of its Membership Interest, the transferee shall be admitted to the Company as an additional Member upon its execution of an instrument signifying its agreement to be bound by the terms and conditions of this Agreement.

    (iii) Voting. Whether a substitute Member or an additional Member, absent the written consent of all existing Members of the Company, the transferee shall be a limited Member and possess only the percentage of the monetary rights of the transferor Member that was transferred without any voting power as a Member in the Company.

(f) Member Voting.
    (i) Voting power. The Company's Members shall each have voting power equal to their share of Membership Interest in the Company.

    (ii) Proxies. At all meetings of Members, a Member may vote in person or by proxy executed in writing by the Member or by his duly authorized attorney-in-fact. Such proxy shall be delivered to the Secretary of the Company before or at the time of the meeting. No proxy shall be valid after 11 months from the date of its execution, unless otherwise provided in the proxy.

(g) Duties of the Members. The Members shall cause the Company to do or cause to be done all things necessary to preserve and keep in full force and effect its existence, rights (charter and statutory), and franchises. The Members also shall cause the Company to:

    (i) Maintain its own books, records, accounts, financial statements, stationery, invoices, checks, and other limited liability company documents and bank accounts separate from any other person;

    (ii) At all times hold itself out as being a legal entity separate from the Members and any other person and conduct its business in its own name;

    (iii) File its own tax returns, if any, as may be required under applicable law, and pay any taxes required to be paid under applicable law;

    (iv) Not commingle its assets with assets of the Members or any other person, and separately identify, maintain, and segregate all Company assets;

    (v) Pay its own liabilities only out of its own funds, except with respect to organizational expenses;

    (vi) Maintain an arm's length relationship with the Members, and, with respect to all business transactions entered into by the Company with the Members, require that the terms and conditions of such transactions (including the terms relating to the amounts paid thereunder) are the same as would be generally available in comparable business transactions if such transactions were with a person that was not a Member;

    (vii) Pay the salaries of its own employees, if any, out of its own funds and maintain a sufficient number of employees in light of its contemplated business operations;

    (viii) Not guarantee or become obligated for the debts of any other person or hold out its credit as being available to satisfy the obligations of others;

    (ix) Allocate fairly and reasonably any overhead for shared office space;

    (x) Not pledge its assets for the benefit of any other person or make any loans or advances to any person;

    (xi) Correct any known misunderstanding regarding its separate identity;

    (xii) Maintain adequate capital in light of its contemplated business purposes;

    (xiii) Cause its Members to meet or act pursuant to written consent and keep minutes of such meetings and actions and observe all other California limited liability company formalities;

    (xiv) Make any permitted investments directly or through brokers engaged and paid by the Company or its agents;

    (xv) Not require any obligations or securities of the Members; and

    (xvi) Observe all other limited liability formalities.

Failure of the Members to comply with any of the foregoing covenants shall not affect the status of the Company as a separate legal entity or the limited liability of the Members.

(h) Fiduciary Duties of the Members.
    (i) Loyalty and Care. Except to the extent otherwise provided herein, each Member shall have a fiduciary duty of loyalty and care similar to that of members of limited liability companies organized under the laws of California.

    (ii) Competition with the Company. The Members shall refrain from dealing with the Company in the conduct of the Company's business as or on behalf of a party having an interest adverse to the Company unless a majority, by individual vote, of the Members excluding the interested Member, consents thereto. The Members shall refrain from competing with the Company in the conduct of the Company's business unless a majority, by individual vote, of the Members excluding the interested Member, consents thereto. In the event that a Member is the sole Member of the Company, no vote shall be required.

    (iii) Duties Only to the Company. The Member's fiduciary duties of loyalty and care are to the Company and not to the other Members. The Members shall owe fiduciary duties of disclosure, good faith, and fair dealing to the Company and to the other Members. A Member who so performs their duties shall not have any liability by reason of being or having been a Member.

    (iv) Reliance on Reports. In discharging the Member's duties, a Member is entitled to rely on information, opinions, reports, or statements, including financial statements and other financial data, if prepared or presented by any of the following:
        1. One or more Members, Officers, or employees of the Company whom the Member reasonably believes to be reliable and competent in the matters presented.
        2. Legal counsel, public accountants, or other persons as to matters the Member reasonably believes are within the persons' professional or expert competence.
        3. A committee of Members of which the affected Member is not a participant, if the Member reasonably believes the committee merits confidence.

(i) Waiver of Partition: Nature of Interest. Except as otherwise expressly provided in this Agreement, to the fullest extent permitted by law, each Member hereby irrevocably waives any right or power that such Member might have to cause the Company or any of its assets to be partitioned, to cause the appointment of a receiver for all or any portion of the assets of the Company, to compel any sale of all or any portion of the assets of the Company pursuant to any applicable law or to file a complaint or to institute any proceeding at law or in equity to cause the dissolution, liquidation, winding up or termination of the Company. No Member shall have any interest in any specific assets of the Company.

(j) Compensation of Members. The Members shall have the authority to fix the compensation of individual Members. All Members may be paid their expenses, if any, of attendance at meetings of the Members, which may be a fixed sum for attendance at each meeting of the Members or a stated salary as a Member. No such payment shall preclude any Member from serving the Company in any other capacity and receiving compensation.

(k) Members as Agents. All Members are agents of the Company for the purpose of its business. An act of any Member, including the signing of an instrument in the Company's name, binds the Company where the Member executed the act for apparently carrying on the Company's business or business of the kind carried on by the Company in the ordinary course, unless the Member had no authority to act for the Company in the particular matter and the person with whom the Member was dealing knew or had notice that the Member lacked authority. An act of a Member binds the Company, however, even where the Member executed the act not apparently for carrying on the Company's business or business of the kind carried on by the Company in the ordinary course only if the act was authorized by the other Members.

IV. Accounting and Distributions.

(a) Fiscal Year. The Company's fiscal year shall end on the last day of December.

(b) Records. All financial records including tax returns and financial statements will be held at the Company's primary business address and will be accessible to all Members.

(c) Distributions. Distributions shall be issued, as directed by the Company's Treasurer or Assistant Treasurer, on a quarterly basis, based upon the Company's fiscal year. The distribution shall not exceed the remaining net cash of the Company after making appropriate provisions for the Company's ongoing and anticipatable liabilities and expenses. Each Member shall receive a percentage of the overall distribution that matches that Member's percentage of membership interest in the Company.

V. Tax Treatment Election.

The Company has not filed with the Internal Revenue Service for treatment as a corporation. Instead, the Company will be taxed as a pass-through organization. The Members may elect for the Company to be treated as a C-Corporation, an S-Corporation, or a Partnership at any time.

VI. Officers.

(a) Appointment and Titles of Officers. The initial officers shall be appointed by the Members and shall consist of at least a Chairman, a Secretary and a Treasurer. Any additional or substitute officers shall be chosen by the Members. The Members may also choose one or more President, Vice-President, Assistant Secretaries and Assistant Treasurers. Any number of offices may be held by the same person, as permitted by California law. The Members may appoint such other officers and agents as they shall deem necessary or advisable who shall hold their offices for such terms and shall exercise such powers and perform such duties as shall be determined from time to time by the Members. The officers and agents of the Company shall hold office until their successors are chosen and qualified. Any officer elected or appointed by the Members may be removed at any time, with or without cause, by the affirmative vote of a majority of the Members. Any vacancy occurring in any office of the Company shall be filled by the Members. Unless the Members decide otherwise, if the title of an officer is one commonly used for officers of a limited liability company formed under California law, the assignment of such title shall constitute the delegation to such person of the authorities and duties that are normally associated with that office.

    (i) Chairman. The Chairman shall be the chief executive officer of the Company, shall preside at all meetings of the Members, shall be responsible for the general and active management of the business of the Company and shall see that all orders and resolutions of the Members are carried into effect. The Chairman shall execute all contracts on behalf of the Company, except:
        1. Where required or permitted by law or this Agreement to be otherwise signed and executed;
        2. Where signing and execution thereof shall be expressly delegated by the Member to some other officer or agent of the Company.

    (ii) President. In the absence of the Chairman or in the event of the Chairman's inability to act, the President shall perform the duties of the Chairman, and when so acting, shall have all the powers of and be subject to all the restrictions upon the Chairman. The President shall perform such other duties and have such other powers as the Members may from time to time prescribe.

    (iii) Vice-Presidents. In the absence of the Chairman and President or in the event of their inability to act, any Vice-Presidents in the order designated by the Members (or, in the absence of any designation, in the order of their election) shall perform the duties of the Chairman, and when so acting, shall have all the powers of and be subject to all the restrictions upon the Chairman. Vice-Presidents, if any, shall perform such other duties and have such other powers as the Members may from time to time prescribe.

    (iv) Secretary and Assistant Secretary. The Secretary shall be responsible for filing legal documents and maintaining records for the Company. The Secretary shall attend all meetings of the Members and record all the proceedings of the meetings of the Company and of the Members in a book to be kept for that purpose. The Secretary shall give, or cause to be given, notice of all meetings of the Members, as required in this Agreement or by California law, and shall perform such other duties as may be prescribed by the Members or the Chairman, under whose supervision the Secretary shall serve. The Secretary shall cause to be prepared such reports and/or information as the Company is required to prepare by applicable law, other than financial reports. The Assistant Secretary, or if there be more than one, the Assistant Secretaries in the order determined by the Members (or if there be no such determination, then in order of their election), shall, in the absence of the Secretary or in the event of the Secretary's inability to act, perform the duties and exercise the powers of the Secretary and shall perform such other duties and have such other powers as the Members may from time to time prescribe.

    (v) Treasurer and Assistant Treasurer. The Treasurer shall have the custody of the Company funds and securities and shall keep full and accurate accounts of receipts and disbursements in books belonging to the Company according to generally accepted accounting practices, using a fiscal year ending on the last day of the month of December. The Treasurer shall deposit all moneys and other valuable effects in the name and to the credit of the Company in such depositories as may be designated by the Members. The Treasurer shall distribute the Company's profits to the Members. The Treasurer shall disburse the funds of the Company as may be ordered by the Members and shall render to the Chairman and to the Members, at their regular meetings or when the Members so require, an account of all of the Treasurer's transactions and of the financial condition of the Company. As soon as practicable after the end of each fiscal year of the Company, the Treasurer shall prepare a statement of financial condition as of the last day of the Company's fiscal year, and a statement of income and expenses for the fiscal year then ended, together with supporting schedules. Each of said annual statements shall be prepared on an income tax basis and delivered to the Members forthwith upon its preparation. In addition, the Treasurer shall keep all financial records required to be kept pursuant to California law. The Assistant Treasurer, or if there shall be more than one, the Assistant Treasurers in the order determined by the Members (or if there be no such determination, then in the order of their election), shall, in the absence of the Treasurer or in the event of the Treasurer's inability to act, perform the duties and exercise the powers of the Treasurer and shall perform such other duties and have such other powers as the Members may from time to time prescribe.

(b) Officers as Agents. The officers, to the extent of their powers set forth in this Agreement or otherwise vested in them by action of the Members not inconsistent with this Agreement, are agents of the Company for the purpose of the Company's business, and the actions of the officers taken in accordance with such powers shall bind the Company.

(c) Fiduciary Duties of the Officers.
    (i) Loyalty and Care. Except to the extent otherwise provided herein, each officer shall have a fiduciary duty of loyalty and care similar to that of officers of limited liability companies organized under the laws of California.

    (ii) Competition with the Company. The officers shall refrain from dealing with the Company in the conduct of the Company's business as or on behalf of a party having an interest adverse to the Company unless a majority, by individual vote, of the Members, excluding the interested officer if that officer is a Member, consents thereto. The officers shall refrain from competing with the Company in the conduct of the Company's business unless a majority, by individual vote, of the Members, excluding the interested officer if that officer is a Member, consents thereto. In the event that the interested officer is the sole Member, no vote shall be required.

    (iii) Duties Only to the Company. The officers' fiduciary duties of loyalty and care are to the Company and not to the Members or other officers. The officers shall owe fiduciary duties of disclosure, good faith and fair dealing to the Company and to the Members, but shall owe no such duties to officers unless the officer is a Member. An officer who so performs their duties shall not have any liability by reason of being or having been an officer.

    (iv) Reliance on Reports. In discharging the officer's duties, an officer is entitled to rely on information, opinions, reports, or statements, including financial statements and other financial data, if prepared or presented by any of the following:
        1. One or more Members, officers, or employees of the Company whom the officer reasonably believes to be reliable and competent in the matters presented.
        2. Legal counsel, public accountants, or other persons as to matters the officer reasonably believes are within the persons' professional or expert competence.
        3. A committee of Members of which the affected officer is not a participant, if the officer reasonably believes the committee merits confidence.

VII. Dissolution.

(a) Limits on Dissolution. The Company shall have a perpetual existence, and shall be dissolved, and its affairs shall be wound up only upon the provisions established above.

Notwithstanding any other provision of this Agreement, the bankruptcy of any Member shall not cause such Member to cease to be a Member of the Company and upon the occurrence of such an event, the business of the Company shall continue without dissolution.

Each Member waives any right that it may have to agree in writing to dissolve the Company upon the bankruptcy of any Member or the occurrence of any event that causes any Member to cease to be a Member of the Company.

(b) Winding Up. Upon the occurrence of any event specified in the earlier "Duration" section above, the Company shall continue solely for the purpose of winding up its affairs in an orderly manner, liquidating its assets, and satisfying the claims of its creditors. One or more Members, selected by the remaining Members, shall be responsible for overseeing the winding up and liquidation of the Company, shall take full account of the liabilities of the Company and its assets, shall either cause its assets to be distributed as provided under this Agreement or sold, and if sold as promptly as is consistent with obtaining the fair market value thereof, shall cause the proceeds therefrom, to the extent sufficient therefor, to be applied and distributed as provided under this Agreement.

(c) Distributions in Kind. Any non-cash asset distributed to one or more Members in liquidation of the Company shall first be valued at its fair market value (net of any liability secured by such asset that such Member assumes or takes subject to) to determine the profits or losses that would have resulted if such asset were sold for such value, such profit or loss shall then be allocated as provided under this Agreement. The fair market value of such asset shall be determined by the Members or, if any Member objects, by an independent appraiser (any such appraiser must be recognized as an expert in valuing the type of asset involved) approved by the Members.

(d) Termination. The Company shall terminate when (i) all of the assets of the Company, after payment of or due provision for all debts, liabilities and obligations of the Company, shall have been distributed to the Members in the manner provided for under this Agreement and (ii) the Company's registration with California shall have been canceled in the manner required by California law.

(e) Accounting. Within a reasonable time after complete liquidation, the Company Treasurer shall furnish the Members with a statement which shall set forth the assets and liabilities of the Company as at the date of dissolution and the proceeds and expenses of the disposition thereof.

(f) Limitations on Payments Made in Dissolution. Except as otherwise specifically provided in this Agreement, each Member shall only be entitled to look solely to the assets of the Company for the return of its initial contribution and shall have no recourse for its initial contribution and/or share of profits (upon dissolution or otherwise) against any other Member.

(g) Notice to California Authorities. Upon the winding up of the Company, the Member with the highest percentage of membership interest in the Company shall be responsible for the filing of all appropriate notices of dissolution with California and any other appropriate state or federal authorities or agencies as may be required by law. In the event that two or more Members have equally high percentages of membership interest in the Company, the Member with the longest continuous tenure as a Member of the Company shall be responsible for the filing of such notices.

VIII. Exculpation and Indemnification.

(a) No Member, officer, employee, or agent of the Company and no employee, agent, or affiliate of a Member (collectively, the "Covered Persons") shall be liable to the Company or any other person who has an interest in or claim against the Company for any loss, damage or claim incurred by reason of any act or omission performed or omitted by such Covered Person in good faith on behalf of the Company and in a manner reasonably believed to be within the scope of the authority conferred on such Covered Person by this Agreement, except that a Covered Person shall be liable for any such loss, damage or claim incurred by reason of such Covered Person's gross negligence or willful misconduct.

(b) To the fullest extent permitted by applicable law, a Covered Person shall be entitled to indemnification from the Company for any loss, damage, or claim incurred by such Covered Person by reason of any act or omission performed or omitted by such Covered Person in good faith on behalf of the Company and in a manner reasonably believed to be within the scope of the authority conferred on such Covered Person by this Agreement. Expenses, including legal fees, incurred by a Covered Person defending any claim, demand, action, suit, or proceeding shall be paid by the Company. The Covered Person shall be liable to repay such amount if it is determined that the Covered Person is not entitled to be indemnified as authorized in this Agreement. No Covered Person shall be entitled to be indemnified in respect of any loss, damage, or claim incurred by such Covered Person by reason of such Covered Person's gross negligence or willful misconduct with respect to such acts or omissions. Any indemnity under this Agreement shall be provided out of and to the extent of Company assets only.

(c) A Covered Person shall be fully protected in relying in good faith upon the records of the Company and upon such information, opinions, reports or statements presented to the Company by any person as to matters the Covered Person reasonably believes are within such other person's professional or expert competence and who has been selected with reasonable care by or on behalf of the Company, including information, opinions, reports or statements as to the value and amount of the assets, liabilities, or any other facts pertinent to the existence and amount of assets from which distributions to the Members might properly be paid.

(d) To the extent that, at law or in equity, a Covered Person has duties (including fiduciary duties) and liabilities relating thereto to the Company or to any other Covered Person, a Covered Person acting under this Agreement shall not be liable to the Company or to any other Covered Person for its good faith reliance on the provisions of this Agreement. The provisions of the Agreement, to the extent that they restrict the duties and liabilities of a Covered Person otherwise existing at law or in equity, are agreed by the Members to replace such other duties and liabilities of such Covered Person.

(e) The foregoing provisions of this article shall survive any termination of this Agreement.

IX. Insurance.

The Company shall have the power to purchase and maintain insurance, including insurance on behalf of any Covered Person against any liability asserted against such person and incurred by such Covered Person in any such capacity, or arising out of such Covered Person's status as an agent of the Company, whether or not the Company would have the power to indemnify such person against such liability under the provisions of Article VIII or under applicable law. This is separate and apart from any business insurance that may be required as part of the business in which the Company is engaged.

X. Settling Disputes.

All Members agree to enter into mediation before filing suit against any other Member or the Company for any dispute arising from this Agreement or Company. Members agree to attend one session of mediation before filing suit. If any Member does not attend mediation, or the dispute is not settled after one session of mediation, the Members are free to file suit. Any lawsuits will be under the jurisdiction of California.

XI. Independent Counsel.

All Members entering into this Agreement have been advised of their right to seek the advice of independent legal counsel before signing this Agreement. All Members and each of them have entered into this Agreement freely and voluntarily and without any coercion or duress.

XII. General Provisions.

(a) Notices. All notices, offers or other communications required or permitted to be given pursuant to this Agreement shall be in writing and may be personally served or sent by United States mail and shall be deemed to have been given when delivered in person or three business days after deposit in United States mail, registered or certified, postage prepaid, and properly addressed, by or to the appropriate party.

(b) Number of Days. In computing the number of days (other than business days) for purposes of this Agreement, all days shall be counted, including Saturdays, Sundays and holidays; provided, however, that if the final day of any time period falls on a Saturday, Sunday or holiday on which national banks are or may elect to be closed, then the final day shall be deemed to be the next day which is not a Saturday, Sunday or such holiday.

(c) Execution of Counterparts. This Agreement may be executed in any number of counterparts, each of which shall be an original, and all of which shall together constitute one and the same instrument.

(d) Severability. The provisions of this Agreement are independent of and separable from each other, and no provision shall be affected or rendered invalid or unenforceable by virtue of the fact that for any reason any other or others of them may be invalid or unenforceable in whole or in part.

(e) Headings. The Article and Section headings in this Agreement are for convenience, and they form no part of this Agreement and shall not affect its interpretation.

(f) Controlling Law. This Agreement shall be governed by and construed in all respects in accordance with the laws of California (without regard to conflicts of law principles thereof).

(g) Application of State Law. Any matter not specifically covered by a provision of this Agreement shall be governed by the applicable provisions of California law.

(h) Amendment. This Agreement may be amended only by written consent of all the Members. Upon obtaining the approval of any such amendment, supplement, or restatement as to the Certificate, the Company shall cause a Certificate of Amendment or Amended and Restated Certificate to be prepared, executed, and filed in accordance with California law.

(i) Entire Agreement. This Agreement contains the entire understanding among the parties hereto with respect to the subject matter hereof, and supersedes all prior and contemporaneous agreements and understandings, inducements or conditions, express or implied, oral or written, except as herein contained.

IN WITNESS WHEREOF, the Members have executed and agreed to this Limited Liability Company Operating Agreement, which shall be effective as of ${formData.effectiveDate || '[DATE]'}.

MEMBERS:

_________________________________    Date: _______________
${formData.member1Name || '[MEMBER 1 NAME]'}

_________________________________    Date: _______________
${formData.member2Name || '[MEMBER 2 NAME]'}


This document was prepared by:
${firmInfo.name}
${firmInfo.address}
${firmInfo.city}
${firmInfo.phone}
Attorney for the Company


Attachment A
Initial Contributions of the Members

The initial contributions of the Members of ${formData.llcName || '[COMPANY NAME]'} LLC are as follows:

${formData.member1Name || '[MEMBER 1 NAME]'}
Contribution:
Cash: $${formData.member1Contribution || '50.00'}

${formData.member2Name || '[MEMBER 2 NAME]'}
Contribution:
Cash: $${formData.member2Contribution || '50.00'}
    `;
  };

  const generatePrenupDocument = () => {
    return `
PRENUPTIAL AGREEMENT

THIS PRENUPTIAL AGREEMENT (this "Agreement") is made and entered into on ${formData.effectiveDate || '[DATE]'}, by and between ${formData.party1Name || '[PARTY 1 NAME]'} ("${formData.party1Name || 'Party 1'}") and ${formData.party2Name || '[PARTY 2 NAME]'} ("${formData.party2Name || 'Party 2'}"), who contemplate marriage to each other.

RECITALS

WHEREAS, the parties desire to marry each other and wish to fix and determine by agreement their respective rights and obligations which may arise from their marital relationship;

WHEREAS, each party acknowledges that they have been advised to obtain independent legal counsel in connection with this Agreement and have had the opportunity to do so;

WHEREAS, each party acknowledges that they have made full and complete disclosure to the other party of their assets, liabilities, income, and financial circumstances;

WHEREAS, each party enters into this Agreement freely and voluntarily, with full knowledge of its contents and legal significance;

NOW, THEREFORE, in consideration of the mutual promises and covenants contained herein and the contemplated marriage, the parties agree as follows:

1. DEFINITIONS

1.1 "Separate Property" shall mean and include:
    (a) All property owned by each party prior to marriage;
    (b) All property acquired by either party during marriage by gift, inheritance, or bequest;
    (c) All income, rents, profits, and appreciation from separate property;
    (d) All property acquired with separate property funds;
    (e) All property designated as separate property by written agreement between the parties.

1.2 "Community Property" shall mean all property acquired by either party during marriage that is not separate property as defined above.

2. PROPERTY RIGHTS AND CHARACTERIZATION

2.1 Separate Property. Each party's separate property, as defined above, shall remain that party's sole and separate property, free from any claim by the other party. Each party may manage, control, and dispose of their separate property without the consent of the other party.

2.2 Community Property. Subject to the provisions of this Agreement, all community property shall be managed and controlled according to California law governing community property.

2.3 Transmutation. No transmutation of separate property to community property or community property to separate property shall occur except by written agreement signed by both parties.

2.4 Business Interests. Each party's business interests existing prior to marriage, including but not limited to ${formData.party1Business || '[PARTY 1 BUSINESS INTERESTS]'} owned by ${formData.party1Name || 'Party 1'} and ${formData.party2Business || '[PARTY 2 BUSINESS INTERESTS]'} owned by ${formData.party2Name || 'Party 2'}, shall remain the separate property of the owning party. Any appreciation in value of such business interests during marriage shall also remain separate property.

3. DISCLOSURE OF ASSETS AND LIABILITIES

3.1 Full Disclosure. Each party represents that they have made full and complete disclosure of all assets, liabilities, income, and financial circumstances to the other party as set forth in the Financial Disclosure Statements attached hereto as Exhibits A and B and incorporated herein by reference.

3.2 Reliance on Disclosure. Each party acknowledges that they are entering into this Agreement in reliance upon the financial disclosures made by the other party.

4. SPOUSAL SUPPORT

4.1 Waiver of Spousal Support. Each party hereby waives and releases any and all rights to receive spousal support (alimony) from the other party, whether temporary, rehabilitative, permanent, or lump sum, in the event of separation, dissolution of marriage, or legal separation.

4.2 Exception for Unconscionability. Notwithstanding the above waiver, if a court of competent jurisdiction determines that the enforcement of this spousal support waiver would be unconscionable at the time of enforcement, the court may order spousal support in such amount and for such time as the court deems just and reasonable under the circumstances.

5. ESTATE PLANNING AND INHERITANCE RIGHTS

5.1 Waiver of Inheritance Rights. Each party waives all rights to inherit from the other party's estate as a surviving spouse under California law, including but not limited to:
    (a) Rights to elect against the other party's will;
    (b) Rights to intestate succession;
    (c) Rights as a pretermitted spouse;
    (d) Rights to family allowance and homestead allowance.

5.2 Right to Make Gifts. Nothing in this Agreement shall prevent either party from making gifts or bequests to the other party by will, trust, or other estate planning document.

6. DEBTS AND OBLIGATIONS

6.1 Separate Debts. Each party shall be solely responsible for their separate debts and obligations incurred prior to marriage. These debts are set forth in the Financial Disclosure Statements referenced above.

6.2 Community Debts. Debts incurred during marriage for the benefit of the community shall be community debts and the responsibility of both parties according to California law.

6.3 Separate Debts During Marriage. Any debt incurred by either party during marriage that is not for the benefit of the community shall be the separate debt of the party incurring such debt.

7. REAL PROPERTY

7.1 Separate Real Property. The real property located at ${formData.party1RealEstate || '[PARTY 1 REAL ESTATE]'} owned by ${formData.party1Name || 'Party 1'} and the real property located at ${formData.party2RealEstate || '[PARTY 2 REAL ESTATE]'} owned by ${formData.party2Name || 'Party 2'} shall remain the separate property of the respective owner.

7.2 Future Real Property. Any real property acquired during marriage shall be characterized as separate or community property based upon the source of funds used for acquisition and the manner in which title is held.

8. RETIREMENT BENEFITS

8.1 Separate Retirement Benefits. All retirement benefits, including but not limited to pension plans, 401(k) plans, IRAs, and other retirement accounts, earned or accrued by each party prior to marriage shall remain the separate property of that party.

8.2 Community Interest in Retirement Benefits. Each party acknowledges that retirement benefits earned during marriage may be subject to community property rights under California law, except as otherwise provided in this Agreement.

9. INSURANCE

9.1 Life Insurance. Each party may maintain life insurance policies and designate beneficiaries as they see fit, subject to any requirements of this Agreement or subsequent written agreements.

9.2 Health Insurance. The parties shall cooperate in maintaining health insurance coverage for the family as circumstances permit.

10. MODIFICATIONS AND AMENDMENTS

10.1 Written Modifications Only. This Agreement may be modified or amended only by written agreement signed by both parties and notarized.

10.2 No Oral Modifications. No oral modifications to this Agreement shall be valid or enforceable.

11. ENFORCEMENT AND VALIDITY

11.1 Severability. If any provision of this Agreement is held invalid or unenforceable by a court of competent jurisdiction, the remainder of this Agreement shall remain in full force and effect.

11.2 Governing Law. This Agreement shall be governed by and construed in accordance with the laws of the State of California.

11.3 Jurisdiction. The parties consent to the jurisdiction of the courts of California for any action arising under this Agreement.

12. INDEPENDENT LEGAL COUNSEL

12.1 Advice of Counsel. Each party acknowledges that they have been advised to seek independent legal counsel regarding this Agreement and have had adequate opportunity to do so.

12.2 ${firmInfo.name} represents ${formData.representedParty || 'Party 1'} in connection with this Agreement. ${formData.party2Counsel || '[PARTY 2 COUNSEL]'} represents ${formData.party2Name || 'Party 2'} in connection with this Agreement.

13. ACKNOWLEDGMENTS

13.1 Voluntary Execution. Each party acknowledges that they are executing this Agreement voluntarily, without duress, coercion, or undue influence.

13.2 Full Understanding. Each party acknowledges that they have read this Agreement, understand its contents, and agree to be bound by its terms.

13.3 Fair and Reasonable. Each party acknowledges that they believe this Agreement is fair and reasonable under the circumstances.

14. WAITING PERIOD

14.1 Seven-Day Waiting Period. Each party acknowledges that they have received a copy of this Agreement at least seven (7) days before its execution, as required by California Family Code Section 1615.

15. EFFECTIVE DATE AND TERMINATION

15.1 Effective Date. This Agreement shall become effective upon the marriage of the parties.

15.2 Termination. This Agreement shall terminate upon the death of either party or upon written agreement of both parties.

16. GENERAL PROVISIONS

16.1 Entire Agreement. This Agreement constitutes the entire agreement between the parties regarding the subject matter herein and supersedes all prior negotiations, representations, or agreements relating thereto.

16.2 Binding Effect. This Agreement shall be binding upon the parties and their respective heirs, successors, and assigns.

16.3 Counterparts. This Agreement may be executed in counterparts, each of which shall be deemed an original and all of which together shall constitute one and the same instrument.

16.4 Attorney Fees. In any action to enforce this Agreement, the prevailing party shall be entitled to reasonable attorney fees and costs.

IN WITNESS WHEREOF, the parties have executed this Prenuptial Agreement on the date first written above.

_________________________________    Date: _______________
${formData.party1Name || '[PARTY 1 NAME]'}

_________________________________    Date: _______________
${formData.party2Name || '[PARTY 2 NAME]'}

STATE OF CALIFORNIA   )
                     ) ss.
COUNTY OF LOS ANGELES )

On ${formData.notaryDate || '[DATE]'}, before me, _________________________, Notary Public, personally appeared ${formData.party1Name || '[PARTY 1 NAME]'} and ${formData.party2Name || '[PARTY 2 NAME]'}, who proved to me on the basis of satisfactory evidence to be the persons whose names are subscribed to the within instrument and acknowledged to me that they executed the same in their authorized capacities, and that by their signatures on the instrument the persons, or the entity upon behalf of which the persons acted, executed the instrument.

I certify under PENALTY OF PERJURY under the laws of the State of California that the foregoing paragraph is true and correct.

WITNESS my hand and official seal.

Signature _________________________

[Notary Seal]


This document was prepared by:
${firmInfo.name}
${firmInfo.address}
${firmInfo.city}
${firmInfo.phone}
Attorney for ${formData.representedParty || 'the Parties'}


FINANCIAL DISCLOSURE STATEMENT - EXHIBIT A
${formData.party1Name || '[PARTY 1 NAME]'}

ASSETS:
Real Property: ${formData.party1RealEstate || 'N/A'}
Personal Property: ${formData.party1PersonalProperty || 'N/A'}
Bank Accounts: ${formData.party1BankAccounts || 'N/A'}
Investment Accounts: ${formData.party1Investments || 'N/A'}
Retirement Accounts: ${formData.party1Retirement || 'N/A'}
Business Interests: ${formData.party1Business || 'N/A'}
Other Assets: ${formData.party1OtherAssets || 'N/A'}

LIABILITIES:
Mortgages: ${formData.party1Mortgages || 'N/A'}
Credit Cards: ${formData.party1CreditCards || 'N/A'}
Student Loans: ${formData.party1StudentLoans || 'N/A'}
Other Debts: ${formData.party1OtherDebts || 'N/A'}

INCOME:
Annual Income: $${formData.party1Income || '[AMOUNT]'}


FINANCIAL DISCLOSURE STATEMENT - EXHIBIT B
${formData.party2Name || '[PARTY 2 NAME]'}

ASSETS:
Real Property: ${formData.party2RealEstate || 'N/A'}
Personal Property: ${formData.party2PersonalProperty || 'N/A'}
Bank Accounts: ${formData.party2BankAccounts || 'N/A'}
Investment Accounts: ${formData.party2Investments || 'N/A'}
Retirement Accounts: ${formData.party2Retirement || 'N/A'}
Business Interests: ${formData.party2Business || 'N/A'}
Other Assets: ${formData.party2OtherAssets || 'N/A'}

LIABILITIES:
Mortgages: ${formData.party2Mortgages || 'N/A'}
Credit Cards: ${formData.party2CreditCards || 'N/A'}
Student Loans: ${formData.party2StudentLoans || 'N/A'}
Other Debts: ${formData.party2OtherDebts || 'N/A'}

INCOME:
Annual Income: $${formData.party2Income || '[AMOUNT]'}
    `;
  };

  const generateContingencyDocument = () => {
    return `
CONTINGENCY FEE AGREEMENT

This Contingency Fee Agreement ("Agreement") is entered into between ${firmInfo.name}, a California law firm ("Attorney"), and ${formData.clientName || '[CLIENT NAME]'} ("Client").

1. SCOPE OF REPRESENTATION
Attorney agrees to represent Client in the matter of: ${formData.caseDescription || '[CASE DESCRIPTION]'}

2. CONTINGENCY FEE
Attorney's fee shall be ${formData.contingencyPercentage || '33.33'}% of any recovery obtained through settlement, judgment, or other resolution of the matter.

3. COSTS AND EXPENSES
Client is responsible for all costs and expenses incurred in connection with this matter, including but not limited to court filing fees, deposition costs, expert witness fees, and investigation expenses.

4. NO RECOVERY, NO FEE
If no recovery is obtained, Client owes no attorney's fees to Attorney, but Client remains responsible for costs and expenses advanced by Attorney.

This Agreement is governed by the laws of the State of California and the Rules of Professional Conduct.

Client Name: ${formData.clientName || '[CLIENT NAME]'}
Client Signature: _________________________ Date: _____________

Attorney: ${firmInfo.name}
By: Rozsa Gyene, Esq.
Attorney Signature: _________________________ Date: _____________
    `;
  };

  const generateCorpDocument = () => {
    return `
ARTICLES OF INCORPORATION

ARTICLE I - NAME
The name of this corporation is ${formData.corpName || '[CORPORATION NAME]'}.

ARTICLE II - PURPOSE
The purpose of this corporation is to engage in any lawful act or activity for which a corporation may be organized under the General Corporation Law of California.

ARTICLE III - AGENT FOR SERVICE OF PROCESS
The name and address in California of this corporation's initial agent for service of process is:
${formData.registeredAgent || '[AGENT NAME]'}
${formData.agentAddress || '[AGENT ADDRESS]'}

ARTICLE IV - CAPITAL STOCK
This corporation is authorized to issue only one class of shares, designated as common stock. The total number of shares authorized is ${formData.authorizedShares || '1,000,000'} shares.

ARTICLE V - DIRECTORS
The number of directors of this corporation is ${formData.numberOfDirectors || '3'}.

IN WITNESS WHEREOF, the undersigned, being the incorporator of this corporation, has executed these Articles of Incorporation on ${formData.effectiveDate || '[DATE]'}.

_________________________
Incorporator Signature
${formData.incorporatorName || '[INCORPORATOR NAME]'}
    `;
  };

  const generateRetainerDocument = () => {
    return `
RETAINER AGREEMENT FOR LEGAL SERVICES

This Retainer Agreement ("Agreement") is entered into between ${firmInfo.name} ("Attorney") and ${formData.clientName || '[CLIENT NAME]'} ("Client").

1. SCOPE OF SERVICES
Attorney agrees to represent Client in the following matter: ${formData.matterDescription || '[MATTER DESCRIPTION]'}

2. RETAINER AND FEES
Client agrees to pay a retainer of $${formData.retainerAmount || '[AMOUNT]'} upon execution of this Agreement. Attorney's hourly rate is ${firmInfo.hourlyRate}. Time will be billed in increments of one-tenth (1/10) of an hour.

3. BILLING AND PAYMENT
Attorney will bill Client monthly for services rendered and costs incurred. Payment is due within thirty (30) days of the billing date.

4. TRUST ACCOUNT
The retainer will be deposited in Attorney's trust account and withdrawn as fees are earned and costs are incurred.

5. TERMINATION
Either party may terminate this Agreement upon written notice. Upon termination, any unused retainer will be refunded to Client.

This Agreement is governed by the laws of the State of California.

Client Name: ${formData.clientName || '[CLIENT NAME]'}
Client Signature: _________________________ Date: _____________

Attorney: ${firmInfo.name}
By: Rozsa Gyene, Esq.
State Bar No. [NUMBER]
Attorney Signature: _________________________ Date: _____________
    `;
  };

  const renderFormFields = () => {
    switch (selectedDocument) {
      case 'llc':
        return (
          <div className="form-grid">
            <div className="form-group">
              <label>LLC Name</label>
              <input
                type="text"
                value={formData.llcName || ''}
                onChange={(e) => handleInputChange('llcName', e.target.value)}
                placeholder="Enter LLC name"
              />
            </div>
            <div className="form-group">
              <label>Business Address</label>
              <input
                type="text"
                value={formData.businessAddress || ''}
                onChange={(e) => handleInputChange('businessAddress', e.target.value)}
                placeholder="Enter business address"
              />
            </div>
            <div className="form-group">
              <label>Registered Agent Name</label>
              <input
                type="text"
                value={formData.registeredAgent || ''}
                onChange={(e) => handleInputChange('registeredAgent', e.target.value)}
                placeholder="Enter registered agent name"
              />
            </div>
            <div className="form-group">
              <label>Agent Address</label>
              <input
                type="text"
                value={formData.agentAddress || ''}
                onChange={(e) => handleInputChange('agentAddress', e.target.value)}
                placeholder="Enter agent address"
              />
            </div>
            <div className="form-group">
              <label>Business Purpose</label>
              <textarea
                value={formData.businessPurpose || ''}
                onChange={(e) => handleInputChange('businessPurpose', e.target.value)}
                placeholder="Describe the business purpose"
              />
            </div>
            <div className="form-group">
              <label>Formation Date</label>
              <input
                type="date"
                value={formData.formationDate || ''}
                onChange={(e) => handleInputChange('formationDate', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Member 1 Name</label>
              <input
                type="text"
                value={formData.member1Name || ''}
                onChange={(e) => handleInputChange('member1Name', e.target.value)}
                placeholder="Enter member 1 name"
              />
            </div>
            <div className="form-group">
              <label>Member 1 Percentage</label>
              <input
                type="number"
                value={formData.member1Percentage || ''}
                onChange={(e) => handleInputChange('member1Percentage', e.target.value)}
                placeholder="Enter percentage"
              />
            </div>
            <div className="form-group">
              <label>Member 1 Contribution</label>
              <input
                type="text"
                value={formData.member1Contribution || ''}
                onChange={(e) => handleInputChange('member1Contribution', e.target.value)}
                placeholder="Enter contribution amount"
              />
            </div>
            <div className="form-group">
              <label>Member 2 Name</label>
              <input
                type="text"
                value={formData.member2Name || ''}
                onChange={(e) => handleInputChange('member2Name', e.target.value)}
                placeholder="Enter member 2 name"
              />
            </div>
            <div className="form-group">
              <label>Member 2 Percentage</label>
              <input
                type="number"
                value={formData.member2Percentage || ''}
                onChange={(e) => handleInputChange('member2Percentage', e.target.value)}
                placeholder="Enter percentage"
              />
            </div>
            <div className="form-group">
              <label>Member 2 Contribution</label>
              <input
                type="text"
                value={formData.member2Contribution || ''}
                onChange={(e) => handleInputChange('member2Contribution', e.target.value)}
                placeholder="Enter contribution amount"
              />
            </div>
            <div className="form-group">
              <label>Effective Date</label>
              <input
                type="date"
                value={formData.effectiveDate || ''}
                onChange={(e) => handleInputChange('effectiveDate', e.target.value)}
              />
            </div>
          </div>
        );
      
      case 'prenup':
        return (
          <div className="form-grid">
            <div className="form-group">
              <label>Party 1 Name</label>
              <input
                type="text"
                value={formData.party1Name || ''}
                onChange={(e) => handleInputChange('party1Name', e.target.value)}
                placeholder="Enter party 1 name"
              />
            </div>
            <div className="form-group">
              <label>Party 2 Name</label>
              <input
                type="text"
                value={formData.party2Name || ''}
                onChange={(e) => handleInputChange('party2Name', e.target.value)}
                placeholder="Enter party 2 name"
              />
            </div>
            <div className="form-group">
              <label>Party 1 Business Interests</label>
              <input
                type="text"
                value={formData.party1Business || ''}
                onChange={(e) => handleInputChange('party1Business', e.target.value)}
                placeholder="Describe business interests"
              />
            </div>
            <div className="form-group">
              <label>Party 2 Business Interests</label>
              <input
                type="text"
                value={formData.party2Business || ''}
                onChange={(e) => handleInputChange('party2Business', e.target.value)}
                placeholder="Describe business interests"
              />
            </div>
            <div className="form-group">
              <label>Party 1 Real Estate</label>
              <input
                type="text"
                value={formData.party1RealEstate || ''}
                onChange={(e) => handleInputChange('party1RealEstate', e.target.value)}
                placeholder="Property address"
              />
            </div>
            <div className="form-group">
              <label>Party 2 Real Estate</label>
              <input
                type="text"
                value={formData.party2RealEstate || ''}
                onChange={(e) => handleInputChange('party2RealEstate', e.target.value)}
                placeholder="Property address"
              />
            </div>
            <div className="form-group">
              <label>Party 1 Annual Income</label>
              <input
                type="number"
                value={formData.party1Income || ''}
                onChange={(e) => handleInputChange('party1Income', e.target.value)}
                placeholder="Enter annual income"
              />
            </div>
            <div className="form-group">
              <label>Party 2 Annual Income</label>
              <input
                type="number"
                value={formData.party2Income || ''}
                onChange={(e) => handleInputChange('party2Income', e.target.value)}
                placeholder="Enter annual income"
              />
            </div>
            <div className="form-group">
              <label>Represented Party</label>
              <select
                value={formData.representedParty || 'Party 1'}
                onChange={(e) => handleInputChange('representedParty', e.target.value)}
              >
                <option value="Party 1">Party 1</option>
                <option value="Party 2">Party 2</option>
                <option value="Both Parties">Both Parties</option>
              </select>
            </div>
            <div className="form-group">
              <label>Party 2 Counsel</label>
              <input
                type="text"
                value={formData.party2Counsel || ''}
                onChange={(e) => handleInputChange('party2Counsel', e.target.value)}
                placeholder="Enter attorney name for Party 2"
              />
            </div>
            <div className="form-group">
              <label>Effective Date</label>
              <input
                type="date"
                value={formData.effectiveDate || ''}
                onChange={(e) => handleInputChange('effectiveDate', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Notary Date</label>
              <input
                type="date"
                value={formData.notaryDate || ''}
                onChange={(e) => handleInputChange('notaryDate', e.target.value)}
              />
            </div>
          </div>
        );

      case 'contingency':
        return (
          <div className="form-grid">
            <div className="form-group">
              <label>Client Name</label>
              <input
                type="text"
                value={formData.clientName || ''}
                onChange={(e) => handleInputChange('clientName', e.target.value)}
                placeholder="Enter client name"
              />
            </div>
            <div className="form-group">
              <label>Case Description</label>
              <textarea
                value={formData.caseDescription || ''}
                onChange={(e) => handleInputChange('caseDescription', e.target.value)}
                placeholder="Describe the legal matter"
              />
            </div>
            <div className="form-group">
              <label>Contingency Percentage</label>
              <select
                value={formData.contingencyPercentage || '33.33'}
                onChange={(e) => handleInputChange('contingencyPercentage', e.target.value)}
              >
                <option value="25">25%</option>
                <option value="33.33">33.33%</option>
                <option value="40">40%</option>
              </select>
            </div>
          </div>
        );

      default:
        return (
          <div className="form-grid">
            <div className="form-group">
              <label>Client Name</label>
              <input
                type="text"
                value={formData.clientName || ''}
                onChange={(e) => handleInputChange('clientName', e.target.value)}
                placeholder="Enter client name"
              />
            </div>
            <div className="form-group">
              <label>Matter Description</label>
              <textarea
                value={formData.matterDescription || ''}
                onChange={(e) => handleInputChange('matterDescription', e.target.value)}
                placeholder="Describe the legal matter"
              />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="App">
      {/* Header */}
      <div className="header">
        <h1>{firmInfo.name}</h1>
        <p>{firmInfo.address}, {firmInfo.city} • {firmInfo.phone}</p>
        <div className="subtitle">Document Generation System</div>
      </div>

      {/* Document Type Selection */}
      <div className="document-type-section">
        <h2>Select Document Type</h2>
        <div className="document-type-buttons">
          {documentTypes.map((type) => {
            const IconComponent = type.icon;
            return (
              <button
                key={type.id}
                onClick={() => setSelectedDocument(type.id)}
                className={`document-type-button ${selectedDocument === type.id ? 'active' : ''}`}
              >
                <IconComponent size={20} />
                {type.name}
              </button>
            );
          })}
        </div>

        <button
          onClick={generateDocument}
          className="document-type-button"
        >
          <FileText size={20} />
          Generate Document
        </button>
      </div>

      {/* Form Section */}
      <div className="form-section">
        <h3>
          {documentTypes.find(d => d.id === selectedDocument)?.name} Information
        </h3>
        {renderFormFields()}
        
        <button
          onClick={generateDocument}
          className="generate-button"
        >
          Generate Document
        </button>
      </div>

      {/* Generated Document */}
      {generatedDocument && (
        <div className="generated-document">
          <div className="document-actions">
            <button 
              className="action-button"
              onClick={() => window.print()}
            >
              Print Document
            </button>
            <button 
              className="action-button"
              onClick={() => {
                const element = document.createElement("a");
                const file = new Blob([generatedDocument], {type: 'text/plain'});
                element.href = URL.createObjectURL(file);
                element.download = `${selectedDocument}_document.txt`;
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
              }}
            >
              Download
            </button>
          </div>
          
          <pre style={{whiteSpace: 'pre-wrap', fontFamily: 'serif'}}>
            {generatedDocument}
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;
