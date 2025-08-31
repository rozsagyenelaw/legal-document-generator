import React, { useState } from 'react';
import { Building, Users, Heart, FileText, DollarSign, Shield } from 'lucide-react';

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
    { id: 'articles', name: 'Articles of Incorporation', icon: Building },
    { id: 'bylaws', name: 'Corporate Bylaws', icon: FileText },
    { id: 'retainer', name: 'CA Retainer Agreement', icon: FileText },
    { id: 'assignment', name: 'Assignment of Interest', icon: FileText },
    { id: 'trust', name: 'Irrevocable Trust', icon: Shield },
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
      case 'articles':
        template = generateArticlesDocument();
        break;
      case 'bylaws':
        template = generateBylawsDocument();
        break;
      case 'retainer':
        template = generateRetainerDocument();
        break;
      case 'assignment':
        template = generateAssignmentDocument();
        break;
       case 'trust':
        template = generateTrustDocument();
        break;
      default:
        template = 'Document type not found.';
    }
    
    setGeneratedDocument(template);
  };

const generateTrustDocument = () => {
    return `THE ${formData.trustName?.toUpperCase() || '[TRUST NAME]'} IRREVOCABLE TRUST

${formData.trustDate || '[DATE]'}

LAW OFFICES
LAW OFFICES OF ROZSA GYENE, PC
450 N BRAND BLVD. SUITE 623
GLENDALE, CALIFORNIA 91203

THE ${formData.trustName?.toUpperCase() || '[TRUST NAME]'} IRREVOCABLE TRUST

Article One
Establishing the Trust

The date of this Irrevocable Trust Agreement is ${formData.trustDate || '[DATE]'}. The parties to the agreement are ${formData.grantor1Name || '[GRANTOR 1 NAME]'} and ${formData.grantor2Name || '[GRANTOR 2 NAME]'} ("Grantor"), and ${formData.trusteeName || '[TRUSTEE NAME]'} (the Trustee).

I intend that this agreement create a valid trust under the laws of ${formData.governingState || 'California'} and under the laws of any state in which any trust created under this agreement is administered. The terms of this trust agreement prevail over any provision of ${formData.governingState || 'California'} law, except those provisions that are mandatory and may not be waived.

I may not serve as Trustee of any trust created under this agreement at any time.

Section 1.01 Identifying the Trust

The Trust may be referred to as ${formData.trusteeName || '[TRUSTEE NAME]'}, Trustee of The ${formData.trustName || '[TRUST NAME]'} Irrevocable Trust, dated ${formData.trustDate || '[DATE]'}.

Section 1.02 Reliance by Third Parties

From time to time, third parties may require documentation to verify the existence of agreement, or particular provisions of it, such as the name or names of the Trustee or the powers held by the Trustee. To protect the confidentiality of this agreement, the Trustee may use an affidavit of certification of the trust identifies the Trustee and sets forth the authority of the Trustee to transact business on behalf of trust in lieu of providing a copy of this agreement.

A third party may rely upon an affidavit or certification of trust that is signed by the Trustee with respect to the representations contained in the affidavit or certification of trust.

Section 1.03 An Irrevocable Trust

This Trust is irrevocable, and I cannot alter, amend, revoke, or terminate it in any way, except as outlined below.

Under Probate Code Section 15404, if the Grantor and all the beneficiaries of this trust consent, they may compel the modification or termination of this trust under Probate Code Section 15404 and no petition to the court is required.

In the event this Trust holds residential real property used by the Grantor, then Grantor shall have the exclusive right to occupy and use such real property and shall not be required to pay rent for the use of such property.

Section 1.04 Transfers to the Trust

I transfer to the Trustee the property listed in Schedule A, attached to this agreement, to be held on the terms and conditions set forth in this instrument. I retain no right, title or interest in the income or principal of this trust or any other incident of ownership in any trust property.

Section 1.05 Statement of My Intent

I am creating this trust with the intent that assets transferred to the trust be held for the benefit of my trust beneficiaries on the terms and conditions set forth in this agreement. My specific objectives in creating this trust include:

- Any gift made to the trust be treated as a completed gift for federal estate and gift tax purposes;
- The assets of the trust estate be excluded for federal estate tax purposes from my gross estate;
- The assets in this trust not be subject to the claims of my creditors and any beneficiary's creditors.

Section 1.06 Not a Grantor Trust

I intend that I not be taxed as owner of any portion of this trust for federal income tax purposes. All provisions of this trust agreement are to be construed consistent with this intent.

(a) Transactions for Less than Adequate Consideration
No one may buy, exchange, or otherwise deal with any trust income or principal for less than full and adequate consideration in money or money's worth.

(b) No Power to Borrow without Adequate Interest or Security
Neither I nor any Trustee nor any entity in which I have a substantial interest may borrow from any trust created under this agreement, either directly or indirectly, without adequate interest or security.

(c) Specific Administrative Powers Exercisable Only in Fiduciary Capacity
If any trust created under this agreement includes corporate shares or other securities in which the holdings of the Grantor and the trust are significant from the viewpoint of voting control, only an Independent Trustee may vote or direct the voting of those corporate shares or other securities.

(d) No Payment of Life Insurance Premiums from Trust Income
The Trustee may not use the income of this trust to pay the premiums on any life insurance policies insuring my life.

Article Two
Our Children

We have ${formData.numberOfChildren || '[NUMBER]'} children. They are:
${formData.child1Name || '[CHILD 1 NAME]'}, born on ${formData.child1DOB || '[DATE]'};
${formData.child2Name || '[CHILD 2 NAME]'}, born on ${formData.child2DOB || '[DATE]'};

Article Three
Trustee Succession Provisions

Section 3.01 Resignation of a Trustee

A Trustee may resign by submitting a written notice of resignation. If I am incapacitated or deceased, a resigning Trustee shall give written notice to the Income Beneficiaries of the trust and to any other then-serving Trustee.

Section 3.02 Trustee Succession

(a) Appointment of Successor Trustees
If ${formData.trusteeName || '[TRUSTEE NAME]'} ceases to serve I name the following, in the order named, to serve as successor Trustee: ${formData.successorTrustee1 || '[SUCCESSOR TRUSTEE 1]'} and ${formData.successorTrustee2 || '[SUCCESSOR TRUSTEE 2]'} jointly or the survivor of them.

(b) Removal by Beneficiaries
A Trustee may be removed only for cause, which removal must be approved by a court of competent jurisdiction upon the petition of any beneficiary.

(c) Default of Designation
If the office of Trustee of a trust created under this agreement is vacant and no designated Trustee is able and willing to act, the Primary Beneficiary may appoint an individual or corporate fiduciary to serve as successor Trustee.

Section 3.03 Notice of Removal and Appointment

Notice of removal must be in writing and delivered to the Trustee being removed. Notice of appointment must also be in writing and delivered to the successor Trustee.

Section 3.04 Appointment of a Cotrustee

Any individual Trustee may appoint an individual or a corporate fiduciary as a Cotrustee.

Article Four
Administration of Trust Property

Distribution for Our Beneficiaries

Upon the death of the survivor of us, the Trustee shall administer and distribute our remaining trust property.

Section 4.01 Division of Remaining Trust Property

The Trustee shall divide our remaining trust property into shares as follows:

${formData.beneficiary1Name || '[BENEFICIARY 1 NAME]'} - ${formData.beneficiary1Relationship || '[RELATIONSHIP]'} - ${formData.beneficiary1Share || '25'}%
${formData.beneficiary2Name || '[BENEFICIARY 2 NAME]'} - ${formData.beneficiary2Relationship || '[RELATIONSHIP]'} - ${formData.beneficiary2Share || '25'}%
${formData.beneficiary3Name || '[BENEFICIARY 3 NAME]'} - ${formData.beneficiary3Relationship || '[RELATIONSHIP]'} - ${formData.beneficiary3Share || '25'}%
${formData.beneficiary4Name || '[BENEFICIARY 4 NAME]'} - ${formData.beneficiary4Relationship || '[RELATIONSHIP]'} - ${formData.beneficiary4Share || '25'}%

Section 4.02 Distribution of the Share for ${formData.beneficiary1Name || '[BENEFICIARY 1 NAME]'}

The Trustee shall distribute the share set aside for ${formData.beneficiary1Name || '[BENEFICIARY 1 NAME]'} to ${formData.beneficiary1Relationship === 'son' ? 'him' : 'her'} outright and free of trust.

If ${formData.beneficiary1Name || '[BENEFICIARY 1 NAME]'} is deceased, the Trustee shall distribute ${formData.beneficiary1Name || '[BENEFICIARY 1 NAME]'}'s share per stirpes to ${formData.beneficiary1Relationship === 'son' ? 'his' : 'her'} descendants.

Section 4.03 Distribution of the Share for ${formData.beneficiary2Name || '[BENEFICIARY 2 NAME]'}

The Trustee shall distribute the share set aside for ${formData.beneficiary2Name || '[BENEFICIARY 2 NAME]'} to ${formData.beneficiary2Relationship === 'son' ? 'him' : 'her'} outright and free of trust.

If ${formData.beneficiary2Name || '[BENEFICIARY 2 NAME]'} is deceased, the Trustee shall distribute ${formData.beneficiary2Name || '[BENEFICIARY 2 NAME]'}'s share per stirpes to ${formData.beneficiary2Relationship === 'son' ? 'his' : 'her'} descendants.

Section 4.04 Distribution of the Share for ${formData.beneficiary3Name || '[BENEFICIARY 3 NAME]'}

The Trustee shall distribute the share set aside for ${formData.beneficiary3Name || '[BENEFICIARY 3 NAME]'} to ${formData.beneficiary3Relationship === 'son' ? 'him' : 'her'} outright and free of trust.

If ${formData.beneficiary3Name || '[BENEFICIARY 3 NAME]'} is deceased, the Trustee shall distribute ${formData.beneficiary3Name || '[BENEFICIARY 3 NAME]'}'s share per stirpes to ${formData.beneficiary3Relationship === 'son' ? 'his' : 'her'} descendants.

Section 4.05 Distribution of the Share for ${formData.beneficiary4Name || '[BENEFICIARY 4 NAME]'}

The Trustee shall distribute the share set aside for ${formData.beneficiary4Name || '[BENEFICIARY 4 NAME]'} to ${formData.beneficiary4Relationship === 'son' ? 'him' : 'her'} outright and free of trust.

If ${formData.beneficiary4Name || '[BENEFICIARY 4 NAME]'} is deceased, the Trustee shall distribute ${formData.beneficiary4Name || '[BENEFICIARY 4 NAME]'}'s share per stirpes to ${formData.beneficiary4Relationship === 'son' ? 'his' : 'her'} descendants.

Article Five
Remote Contingent Distribution

If at any time no person or entity is qualified to receive final distribution of any part of my trust estate, this portion of my trust estate must be distributed to those persons who would inherit it had I then died intestate owning the property, as determined and in the proportions provided by the laws of ${formData.governingState || 'California'} then in effect.

Article Six
Distributions to Underage and Incapacitated Beneficiaries

If the Trustee is authorized or directed under any provision of this trust to distribute net income or principal to a person who has not yet reached 18 years of age or who is incapacitated, the Trustee may make the distribution by any one or more of the methods described in Section 6.01.

Section 6.01 Methods of Distribution

The Trustee may distribute trust property for any beneficiary's benefit in any one or more of the following methods:

- The Trustee may distribute trust property directly to the beneficiary.
- The Trustee may distribute trust property to the beneficiary's guardian, conservator, parent, other family member, or any person who has assumed the responsibility of caring for the beneficiary.
- The Trustee may distribute trust property to any person or entity, including the Trustee, as custodian for the beneficiary under the Uniform Transfers to Minors Act.

Section 6.02 Retention in Trust

The Trustee may retain and administer trust property in a separate trust for any beneficiary's benefit.

(a) Distribution of Net Income and Principal
The Trustee may distribute to the beneficiary as much of the net income and principal as the Trustee may determine advisable for the beneficiary's health, education, maintenance and support.

(b) Right of Withdrawal
When the beneficiary reaches 18 years of age or is no longer incapacitated, the beneficiary may withdraw all or any portion of the accumulated net income and principal from the trust.

Article Seven
Trust Administration

Section 7.01 Distributions to Beneficiaries

Whenever this trust authorizes or directs the Trustee to make a net income or principal distribution to a beneficiary, the Trustee may apply any property that otherwise could be distributed directly to the beneficiary for his or her benefit.

Section 7.02 Beneficiary's Status

Until the Trustee receives notice of the incapacity, birth, marriage, death, or other event upon which a beneficiary's right to receive payments may depend, the Trustee will not be held liable for acting or not acting with respect to the event.

Section 7.03 No Court Proceedings

The Trustee shall administer this trust with efficiency, with attention to the provisions of this trust, and with freedom from judicial intervention.

Section 7.04 No Bond

The Trustee is not required to furnish any bond for the faithful performance of the Trustee's duties unless required by a court of competent jurisdiction.

Section 7.05 Exoneration of the Trustee

No successor Trustee is obligated to examine the accounts, records, or actions of any previous Trustee.

Section 7.06 Limitations on Trustee Liability

Any individual or corporate fiduciary that serves as the Trustee will not incur any liability by reason of any error of judgment, mistake of law, or action or inaction of any kind in connection with the administration of any trust created under this trust, unless the Trustee's decision is shown by clear and convincing evidence to have been made in bad faith.

Section 7.07 Trustee Compensation

An individual serving as Trustee is entitled to fair and reasonable compensation for the services provided as a fiduciary.

Article Eight
The Trustee's Powers

Section 8.01 Introduction to Trustee's Powers

Except as otherwise specifically provided in this trust, the Trustee may exercise the powers granted by this trust without prior approval from any court, including those powers set forth under the laws of the State of ${formData.governingState || 'California'}.

Section 8.02 Execution of Documents by the Trustee

The Trustee may execute and deliver any written instruments that the Trustee considers necessary to carry out any powers granted in this trust.

Section 8.03 Investment Powers in General

The Trustee may invest in any type of investment that the Trustee determines is consistent with the investment goals of the trust, whether inside or outside the geographic borders of the United States.

Section 8.04 Banking Powers

The Trustee may establish any type of bank account in any banking institutions that the Trustee chooses.

Section 8.05 Business Powers

If the trust owns or acquires an interest in a business entity, the Trustee may exercise the powers and authority provided for in this Section.

Section 8.06 Contract Powers

The Trustee may sell at public or private sale, transfer, exchange for other property, and otherwise dispose of trust property for consideration and upon terms and conditions that the Trustee deems advisable.

Section 8.07 Real Estate Powers

The Trustee may sell at public or private sale, convey, purchase, exchange, lease for any period, mortgage, manage, alter, improve, and in general deal in and with real property.

Article Nine
General Provisions

Section 9.01 Maximum Term for Trusts

Each trust created under this trust document will terminate 21 years after the death of the last to die of the descendants of my paternal and maternal grandparents who are living at the time this agreement is signed.

Section 9.02 Spendthrift Provision

No beneficiary may assign, anticipate, encumber, alienate, or otherwise voluntarily transfer the income or principal of any trust created under this trust.

Section 9.03 Changing the Governing Law and Situs of Administration

At any time, the Trustee may change the governing law of the trust; change the situs of the administration of the trust; and remove all or any part of the property from one jurisdiction to another.

Section 9.04 Definitions

(a) Adopted and Afterborn Persons
A person in any generation who is legally adopted before reaching 18 years of age and his or her descendants have the same rights as natural children of the adopting parent.

(b) Descendants
The term descendants means persons who directly descend from a person, such as children, grandchildren, or great-grandchildren.

(c) Education
The term education includes enrollment at educational institutions, specialized training, and related expenses.

(d) Grantor
Grantor has the same legal meaning as Settlor, Trustor or any other term referring to the maker of a trust.

Section 9.05 General Provisions and Rules of Construction

(a) Multiple Originals
This trust may be executed in any number of counterparts, each of which will be considered an original.

(b) Governing State Law
This trust is governed, construed, and administered according to the laws of ${formData.governingState || 'California'}.

I have executed this trust on ${formData.trustDate || '[DATE]'}. This Irrevocable Trust Agreement is effective when signed by me, whether or not now signed by a Trustee.

${formData.grantor1Name || '[GRANTOR 1 NAME]'}, Grantor
${formData.grantor2Name || '[GRANTOR 2 NAME]'}, Grantor
${formData.trusteeName || '[TRUSTEE NAME]'}, Trustee

STATE OF ${formData.notaryState || '[STATE]'}
COUNTY OF ${formData.notaryCounty || '[COUNTY]'}

On ${formData.trustDate || '[DATE]'}, before me, _________________, a Notary Public, personally appeared ${formData.grantor1Name || '[GRANTOR 1 NAME]'} and ${formData.grantor2Name || '[GRANTOR 2 NAME]'}, who proved to me on the basis of satisfactory evidence to be the persons whose names are subscribed to the within instrument and acknowledged to me that they executed the same.

I certify under PENALTY OF PERJURY under the laws of the State of ${formData.notaryState || '[STATE]'} that the foregoing paragraph is true and correct.

WITNESS my hand and official seal.

_________________________________
Notary Public

Schedule A
${formData.trustProperty || '[TRUST PROPERTY DESCRIPTION]'}

Prepared by:
${firmInfo.name}
${firmInfo.address}
${firmInfo.city}
${firmInfo.phone}
${firmInfo.email}
`;
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
CONTINGENCY FEE AGREEMENT FOR TRUST LITIGATION

This CONTINGENCY FEE AGREEMENT ("Agreement") is entered into as of ${formData.effectiveDate || '_________'}, 2025, between:

CLIENT: ${formData.clientName || '[CLIENT NAME]'} ("Client")
ATTORNEY: Law Offices of Rozsa Gyene, by Rozsa Gyene, Esq. (State Bar No. 208356) ("Attorney")

RE: ${formData.caseDescription || '[CASE DESCRIPTION]'}

RECITALS

WHEREAS, Client seeks legal representation in connection with ${formData.caseDescription || 'a trust dispute'};

WHEREAS, Client has previously retained Attorney on an hourly basis but is unable to continue paying hourly fees;

WHEREAS, the parties wish to convert the representation to a contingency fee basis;

NOW, THEREFORE, in consideration of the mutual promises contained herein, the parties agree:

1. SCOPE OF REPRESENTATION

Attorney agrees to represent Client in the above-referenced matter, including but not limited to:
• Challenging the validity of trusts and/or estates
• Pursuing claims for elder abuse, undue influence, fraud, and conversion
• Seeking recovery of real property and assets
• Recovering damages, costs, and attorney's fees
• All proceedings through trial and post-judgment enforcement

2. CONTINGENCY FEE

A. Percentage Fee: Client agrees to pay Attorney the following percentage of the "gross recovery":
• ${formData.preTrialPercentage || '33'}% if the matter is resolved before trial
• ${formData.trialPercentage || '40'}% if the matter proceeds to trial, arbitration, or is appealed by any party

B. "Gross Recovery" means the total of all amounts recovered by settlement, judgment, or otherwise, whether by cash, property, or other consideration, BEFORE deduction of costs and expenses.

C. Property Recovery: If recovery includes real property, the fee percentage applies to the fair market value of the property or Client's interest therein.

3. COSTS AND EXPENSES

A. Client's Responsibility: Client remains responsible for all costs and expenses, including but not limited to:
• Filing fees
• Service of process fees
• Deposition costs
• Expert witness fees
• Court reporter fees
• Investigation costs
• Travel expenses

B. Advance of Costs: Attorney may, but is not obligated to, advance costs. Any costs advanced by Attorney shall be reimbursed from the gross recovery before calculation of attorney's fees.

C. Prior Costs: Client acknowledges responsibility for all costs previously incurred under the hourly fee arrangement. All costs were paid by client as of today.

4. ATTORNEY'S LIEN

A. STATUTORY LIEN: Client acknowledges that Attorney has a lien under California Code of Civil Procedure § 708.410 et seq. and California Business and Professions Code § 6146 on any recovery obtained.

B. CONTRACTUAL LIEN ON REAL PROPERTY: To secure payment of attorney's fees and costs, Client hereby grants Attorney a lien on:
• Any real property recovered in this action
• Client's interest in the property located at ${formData.propertyAddress || '[Property Address]'}
• Any proceeds from the sale or refinancing of said property

C. NOTICE OF LIEN: Attorney may file a Notice of Attorney's Lien with the County Recorder to perfect this lien. Client agrees to cooperate in perfecting and enforcing this lien.

5. NO RECOVERY

If there is no recovery, Client shall not owe Attorney any attorney's fees for work performed after the date of this Agreement. However, Client remains responsible for:
• All costs and expenses
• Previously incurred hourly fees
• Any sanctions awarded against Client personally

6. DISCHARGE OF ATTORNEY

A. Client may discharge Attorney at any time.

B. If Client discharges Attorney without good cause, Attorney shall be entitled to:
• All unpaid hourly fees incurred before this Agreement
• Reasonable value of services (quantum meruit) after this Agreement
• All unreimbursed costs

C. Attorney's lien rights survive discharge.

7. WITHDRAWAL OF ATTORNEY

Attorney may withdraw for good cause as permitted by law and the Rules of Professional Conduct, including if Client:
• Fails to cooperate
• Pursues illegal or unethical conduct
• Makes the representation unreasonably difficult

8. SETTLEMENT AUTHORITY

A. Attorney shall not settle without Client's written consent.
B. Client agrees not to settle without Attorney present or without Attorney's written consent.
C. Any settlement that excludes or limits attorney's fees requires Attorney's written consent.

9. ALTERNATIVE DISPUTE RESOLUTION

Any dispute arising under this Agreement shall be resolved by binding arbitration under the California Arbitration Act.

10. INFORMED CONSENT

Client acknowledges:
• The right to seek advice from independent counsel before signing
• Understanding all terms of this Agreement
• That contingency fees are negotiable and not set by law
• That this Agreement modifies the prior hourly fee arrangement

11. GENERAL PROVISIONS

A. Entire Agreement: This Agreement supersedes all prior agreements regarding fees for this matter after the date hereof.

B. Modifications: Any modifications must be in writing and signed by both parties.

C. Governing Law: This Agreement is governed by California law.

D. Severability: If any provision is invalid, the remainder shall continue in effect.

12. STATUTORY DISCLOSURE

"THE CONTINGENCY FEE IS NOT SET BY LAW BUT IS NEGOTIABLE BETWEEN THE ATTORNEY AND CLIENT"

CLIENT ACKNOWLEDGMENT AND SIGNATURE

I have read and understood this entire Agreement. I have had the opportunity to ask questions and seek independent legal advice. I agree to all terms stated herein.

CLIENT:

_______________
${formData.clientName || '[CLIENT NAME]'}
Date: _____________

Address: ${formData.clientAddress || '_______________________'}

Phone: ${formData.clientPhone || '________________________'} Email: ${formData.clientEmail || '________________________'}

ATTORNEY:

___________________
Rozsa Gyene, Esq.
State Bar No. 208356
Date: _____________

LAW OFFICES OF ROZSA GYENE
450 N Brand Blvd, Suite 600
Glendale, CA 91203
(818) 291-6217
rozsagyenelaw@yahoo.com
    `;
  };

  const generateArticlesDocument = () => {
    return `
ARTICLES OF INCORPORATION
OF
${formData.corpName || '[CORPORATION NAME]'}

The undersigned, for the purpose of forming a corporation under the laws of the State of California, hereby certifies:

ARTICLE I
NAME

The name of the corporation is ${formData.corpName || '[CORPORATION NAME]'}.

ARTICLE II
PURPOSES AND POWERS

(a) The purpose of this corporation is to engage in any lawful act or activity for which a corporation may be organized under the General Corporation Law of California other than the banking business, the trust company business or the practice of a profession permitted to be incorporated by the California Corporations Code.

(b) Specific Business Purpose: ${formData.businessPurpose || 'To engage in general business activities as permitted by law.'}.

(c) The corporation is organized and operated exclusively for business purposes within the meaning of applicable California law.

ARTICLE III
REGISTERED AGENT

The name and address in California of this corporation's initial agent for service of process is:
${formData.registeredAgent || '[REGISTERED AGENT NAME]'}
${formData.agentAddress || '[REGISTERED AGENT ADDRESS]'}

ARTICLE IV
CAPITAL STOCK

(a) The corporation is authorized to issue only one class of shares of stock, and the total number of shares which the corporation is authorized to issue is ${formData.authorizedShares || '1,000,000'} shares of common stock, no par value per share.

(b) The rights, preferences, privileges, and restrictions granted to or imposed upon the respective classes or series of shares, or the holders thereof, shall be as set forth below or in the resolution or resolutions providing for the issue of such shares adopted by the board of directors pursuant to authority expressly vested in it by the provisions of this Article IV.

(c) Common Stock: The holders of the common stock are entitled to one vote for each share held at all meetings of shareholders. There are no preemptive rights.

ARTICLE V
DIRECTORS

(a) The number of directors of this corporation is ${formData.numberOfDirectors || '3'}, which number may be increased or decreased by amendment to the Bylaws of the corporation, provided that the number of directors shall not be less than three (3).

(b) The names and addresses of the persons who are to serve as the initial directors are:

${formData.director1Name || '[DIRECTOR 1 NAME]'}
${formData.director1Address || '[DIRECTOR 1 ADDRESS]'}

${formData.director2Name || '[DIRECTOR 2 NAME]'}
${formData.director2Address || '[DIRECTOR 2 ADDRESS]'}

${formData.director3Name || '[DIRECTOR 3 NAME]'}
${formData.director3Address || '[DIRECTOR 3 ADDRESS]'}

ARTICLE VI
INCORPORATOR

The name and address of the incorporator is:
${formData.incorporatorName || '[INCORPORATOR NAME]'}
${formData.incorporatorAddress || '[INCORPORATOR ADDRESS]'}

ARTICLE VII
LIABILITY OF DIRECTORS

A director of the corporation shall not be personally liable to the corporation or its shareholders for monetary damages for breach of fiduciary duty as a director, except for liability for:

(a) Acts or omissions not in good faith or which involve intentional misconduct or a knowing violation of law;
(b) Dividends or distributions paid in violation of the California Corporations Code; or
(c) Transactions from which the director derived an improper personal benefit.

Any repeal or modification of this Article VII shall not adversely affect any right or protection of a director existing at the time of such repeal or modification.

ARTICLE VIII
INDEMNIFICATION

The corporation shall indemnify its directors, officers, employees, and agents to the fullest extent permitted by the California Corporations Code, as it may be amended from time to time.

ARTICLE IX
AMENDMENT

The corporation reserves the right to amend, alter, change, or repeal any provision contained in these Articles of Incorporation, in the manner now or hereafter prescribed by statute, and all rights conferred upon shareholders herein are granted subject to this reservation.

ARTICLE X
DURATION

The period of existence of the corporation shall be perpetual.

IN WITNESS WHEREOF, I have executed these Articles of Incorporation this ${formData.incorporationDate || '_____ day of _________, 2025'}.

_________________________________
${formData.incorporatorName || '[INCORPORATOR NAME]'}
Incorporator

STATE OF CALIFORNIA   )
                     ) ss.
COUNTY OF LOS ANGELES )

On ${formData.incorporationDate || '[DATE]'}, before me, _________________________, Notary Public, personally appeared ${formData.incorporatorName || '[INCORPORATOR NAME]'}, who proved to me on the basis of satisfactory evidence to be the person whose name is subscribed to the within instrument and acknowledged to me that he/she executed the same in his/her authorized capacity, and that by his/her signature on the instrument the person, or the entity upon behalf of which the person acted, executed the instrument.

I certify under PENALTY OF PERJURY under the laws of the State of California that the foregoing paragraph is true and correct.

WITNESS my hand and official seal.

Signature _________________________

[Notary Seal]


This document was prepared by:
${firmInfo.name}
${firmInfo.address}
${firmInfo.city}
${firmInfo.phone}
Attorney for the Corporation
    `;
  };

  const generateBylawsDocument = () => {
    return `
BYLAWS
OF
${formData.corpName || '[CORPORATION NAME]'}
(A California Corporation)

ARTICLE I
OFFICES

Section 1.1 Principal Office. The principal office for the transaction of the business of the corporation is located at ${formData.businessAddress || '[BUSINESS ADDRESS]'}, or at such other address as the board of directors may from time to time determine.

Section 1.2 Other Offices. The board of directors may at any time establish branch or subordinate offices at any place or places where the corporation is qualified to do business.

ARTICLE II
SHAREHOLDERS

Section 2.1 Annual Meetings. The annual meeting of shareholders shall be held on ${formData.annualMeetingDate || 'the first Monday in May'} of each year at ${formData.annualMeetingTime || '10:00 a.m.'}, or at such other date and time as shall be designated from time to time by the board of directors and stated in the notice of the meeting. At the annual meeting, directors shall be elected and any other proper business may be transacted.

Section 2.2 Special Meetings. Special meetings of the shareholders may be called by the board of directors, the chairman of the board, the president, or by the holders of shares entitled to cast not less than ten percent (10%) of the votes at such meeting.

Section 2.3 Place of Meetings. Meetings of shareholders shall be held at the principal office of the corporation, or at such other place as may be designated from time to time by the board of directors.

Section 2.4 Notice of Meetings. Written or printed notice stating the place, date and hour of any meeting of shareholders shall be delivered, either personally or by mail, to each shareholder entitled to vote at such meeting, not less than ten (10) nor more than sixty (60) days before the date of such meeting.

Section 2.5 Quorum. The holders of a majority of the outstanding shares of the corporation entitled to vote, represented in person or by proxy, shall constitute a quorum at a meeting of shareholders.

Section 2.6 Voting of Shares. Each outstanding share entitled to vote shall be entitled to one vote upon each matter submitted to a vote at a meeting of shareholders.

Section 2.7 Proxies. At any meeting of shareholders, a shareholder may vote by proxy executed in writing by the shareholder or by his duly authorized attorney-in-fact.

ARTICLE III
BOARD OF DIRECTORS

Section 3.1 General Powers. The business and affairs of the corporation shall be managed by its board of directors.

Section 3.2 Number, Tenure and Qualifications. The number of directors of the corporation shall be ${formData.numberOfDirectors || 'three (3)'} unless changed by amendment to these Bylaws. Each director shall hold office until the next annual meeting of shareholders and until his successor shall have been elected and qualified.

Section 3.3 Regular Meetings. A regular meeting of the board of directors shall be held without other notice than this Bylaw immediately after, and at the same place as, the annual meeting of shareholders.

Section 3.4 Special Meetings. Special meetings of the board of directors may be called by or at the request of the president or any two directors.

Section 3.5 Notice. Notice of any special meeting of the board of directors shall be given at least two (2) days previously thereto by written notice delivered personally or mailed to each director at his business address.

Section 3.6 Quorum. A majority of the number of directors fixed by Section 3.2 shall constitute a quorum for the transaction of business at any meeting of the board of directors.

Section 3.7 Manner of Acting. The act of the majority of the directors present at a meeting at which a quorum is present shall be the act of the board of directors.

Section 3.8 Vacancies. Any vacancy occurring in the board of directors may be filled by the affirmative vote of a majority of the remaining directors.

Section 3.9 Compensation. By resolution of the board of directors, each director may be paid his expenses, if any, of attendance at each meeting of the board of directors.

ARTICLE IV
OFFICERS

Section 4.1 Officers. The officers of the corporation shall be a president, one or more vice presidents (the number thereof to be determined by the board of directors), a secretary, and a treasurer, each of whom shall be elected by the board of directors.

Section 4.2 Election and Term of Office. The officers of the corporation to be elected by the board of directors shall be elected annually by the board of directors at the first meeting of the board of directors held after each annual meeting of the shareholders.

Section 4.3 Removal. Any officer elected or appointed by the board of directors may be removed by the board of directors whenever in its judgment the best interests of the corporation would be served thereby.

Section 4.4 Vacancies. A vacancy in any office because of death, resignation, removal, disqualification or otherwise, may be filled by the board of directors for the unexpired portion of the term.

Section 4.5 President. The president shall be the principal executive officer of the corporation and, subject to the control of the board of directors, shall in general supervise and control all of the business and affairs of the corporation.

Section 4.6 Vice President. In the absence of the president or in event of his death, inability or refusal to act, the vice president shall perform the duties of the president.

Section 4.7 Treasurer. The treasurer shall:
(a) Have charge and custody of and be responsible for all funds and securities of the corporation;
(b) Receive and give receipts for moneys due and payable to the corporation;
(c) Deposit all such moneys in the name of the corporation in such banks as shall be selected in accordance with the provisions of these Bylaws; and
(d) In general perform all the duties incident to the office of treasurer.

Section 4.8 Secretary. The secretary shall:
(a) Keep the minutes of the proceedings of the shareholders and of the board of directors;
(b) See that all notices are duly given in accordance with the provisions of these Bylaws;
(c) Be custodian of the corporate records and of the seal of the corporation;
(d) Keep a register of the post office address of each shareholder; and
(e) In general perform all duties incident to the office of secretary.

ARTICLE V
CONTRACTS, LOANS, CHECKS AND DEPOSITS

Section 5.1 Contracts. The board of directors may authorize any officer or officers, agent or agents, to enter into any contract or execute and deliver any instrument in the name of and on behalf of the corporation.

Section 5.2 Loans. No loans shall be contracted on behalf of the corporation and no evidences of indebtedness shall be issued in its name unless authorized by a resolution of the board of directors.

Section 5.3 Checks, Drafts, etc. All checks, drafts or other orders for the payment of money, notes or other evidences of indebtedness issued in the name of the corporation, shall be signed by such officer or officers, agent or agents of the corporation as shall from time to time be determined by resolution of the board of directors.

Section 5.4 Deposits. All funds of the corporation not otherwise employed shall be deposited from time to time to the credit of the corporation in such banks as the board of directors may select.

ARTICLE VI
CERTIFICATES FOR SHARES AND THEIR TRANSFER

Section 6.1 Certificates for Shares. Certificates representing shares of the corporation shall be in such form as shall be determined by the board of directors.

Section 6.2 Transfer of Shares. Transfer of shares of the corporation shall be made only on the stock transfer books of the corporation by the holder of record thereof or by his legal representative.

ARTICLE VII
FISCAL YEAR

Section 7.1 Fiscal Year. The fiscal year of the corporation shall begin on the first day of January and end on the last day of December in each year.

ARTICLE VIII
DIVIDENDS

Section 8.1 Dividends. Dividends upon the capital stock of the corporation, subject to the provisions of the Articles of Incorporation, if any, may be declared by the board of directors at any regular or special meeting.

ARTICLE IX
CORPORATE SEAL

Section 9.1 Corporate Seal. The corporate seal shall have inscribed thereon the name of the corporation, the year of its organization and the words "Corporate Seal, California."

ARTICLE X
WAIVER OF NOTICE

Section 10.1 Waiver of Notice. Whenever any notice is required to be given under the provisions of the California Corporations Code or under the provisions of the Articles of Incorporation or the Bylaws of the corporation, a waiver thereof in writing signed by the person or persons entitled to such notice shall be deemed equivalent to the giving of such notice.

ARTICLE XI
AMENDMENTS TO BYLAWS

Section 11.1 Amendments. These Bylaws may be altered, amended or repealed and new Bylaws may be adopted by the board of directors at any regular or special meeting of the board of directors.

CERTIFICATE OF SECRETARY

I hereby certify that the foregoing is a true and correct copy of the Bylaws of the above-named corporation, as adopted by the board of directors of said corporation on ${formData.bylawsDate || '[DATE]'}.

_________________________________
${formData.secretaryName || '[SECRETARY NAME]'}
Secretary


This document was prepared by:
${firmInfo.name}
${firmInfo.address}
${firmInfo.city}
${firmInfo.phone}
Attorney for the Corporation
    `;
  };

  const generateRetainerDocument = () => {
    return `
RETAINER AGREEMENT FOR LEGAL SERVICES

This Retainer Agreement ("Agreement") is entered into on ${formData.effectiveDate || '[DATE]'}, between:

CLIENT: ${formData.clientName || '[CLIENT NAME]'} ("Client")
ATTORNEY: ${firmInfo.name}, by Rozsa Gyene, Esq. (State Bar No. 208356) ("Attorney")

1. SCOPE OF SERVICES

Attorney agrees to represent Client in the following matter: ${formData.matterDescription || '[MATTER DESCRIPTION]'}

The scope of representation includes the following services:
• ${formData.scopeService1 || 'Initial consultation and case evaluation'}
• ${formData.scopeService2 || 'Legal research and analysis'}
• ${formData.scopeService3 || 'Preparation of legal documents'}
• ${formData.scopeService4 || 'Negotiation on behalf of Client'}
• ${formData.scopeService5 || 'Court appearances as necessary'}

This Agreement does not include representation in appeals, post-judgment proceedings, or other matters not specifically described above unless agreed to in writing.

2. ATTORNEY FEES AND BILLING

A. Hourly Rate: Attorney's hourly rate is ${formData.hourlyRate || '$400'} per hour for attorney time. Time will be billed in increments of one-tenth (1/10) of an hour (6 minutes).

B. Paralegal and Staff Rates: Paralegal time is billed at ${formData.paralegalRate || '$150'} per hour. Administrative assistant time is billed at ${formData.adminRate || '$75'} per hour.

C. Minimum Billing: There is no minimum billing requirement for telephone conferences, but office conferences will be billed for a minimum of fifteen (15) minutes.

D. Travel Time: Travel time for court appearances, depositions, meetings, and other case-related activities will be billed at full hourly rates.

3. RETAINER

Client agrees to pay a retainer of ${formData.retainerAmount || '[AMOUNT]'} upon execution of this Agreement. This retainer will be deposited in Attorney's trust account and will be applied against fees and costs as they are incurred.

When the retainer is reduced to ${formData.replenishmentAmount || '500'}, Client agrees to replenish the retainer to the original amount within ten (10) days of written notice from Attorney.

4. COSTS AND EXPENSES

In addition to attorney fees, Client is responsible for all costs and expenses incurred in connection with this matter, including but not limited to:
• Court filing fees
• Service of process fees
• Deposition costs
• Court reporter fees
• Expert witness fees
• Investigation costs
• Copying charges at ${formData.copyingRate || '0.25'} per page
• Postage and courier fees
• Long-distance telephone charges
• Computer research charges (Westlaw, Lexis)
• Travel expenses (mileage, parking, hotels, meals)

5. BILLING AND PAYMENT

Attorney will send Client monthly billing statements showing:
• Services performed and time spent
• Costs and expenses incurred
• Payments received
• Current trust account balance

Payment is due within thirty (30) days of the billing date. If payment is not received within thirty (30) days, Attorney may charge interest at the rate of 1.5% per month (18% per annum) on the unpaid balance.

6. TRUST ACCOUNT PROCEDURES

The retainer and any advance cost deposits will be deposited in Attorney's Client Trust Account, which is maintained separate from Attorney's operating accounts. Fees will be withdrawn from the trust account only as they are earned. Costs will be withdrawn as they are incurred or advanced by Attorney.

Client will receive quarterly trust account statements showing all deposits, withdrawals, and the current balance.

7. TERMINATION

A. Client's Right to Terminate: Client may terminate this Agreement at any time by giving written notice to Attorney. Upon termination, Client will pay for all services rendered and costs incurred to the date of termination.

B. Attorney's Right to Terminate: Attorney may terminate this Agreement for good cause, including but not limited to:
• Client's failure to pay fees or costs when due
• Client's failure to cooperate or communicate
• Conflict of interest
• Client's insistence on pursuing frivolous claims
• Breakdown in the attorney-client relationship

C. Refund of Unused Retainer: Upon termination, any unused portion of the retainer will be refunded to Client within thirty (30) days, less any unpaid fees and costs.

8. FILE RETENTION AND RETURN

Attorney will maintain Client's file for seven (7) years after the conclusion of the matter. After seven years, Attorney may destroy the file unless Client requests its return. Client may obtain a copy of the file at any time upon payment of copying costs.

Upon termination of representation, Attorney will provide Client with copies of all documents in the file that belong to Client or are necessary for Client's protection, regardless of whether Client has paid all fees and costs.

9. COMMUNICATION

Attorney will keep Client informed of significant developments in the case and will respond to Client's reasonable requests for information about the status of the matter. Client agrees to keep Attorney informed of any changes in address, telephone number, or other contact information.

Client acknowledges that Attorney cannot guarantee the outcome of any legal matter and that no promises have been made regarding the results of representation.

10. DISPUTE RESOLUTION

Any dispute arising under this Agreement, including disputes over fees, shall be resolved by binding arbitration under the California Arbitration Act. The arbitration shall be conducted by a retired judge or experienced attorney agreed upon by the parties, or if no agreement can be reached, by an arbitrator appointed by the Los Angeles County Bar Association.

11. CLIENT ACKNOWLEDGMENTS

Client acknowledges:
• The right to seek advice from independent counsel before signing this Agreement
• Receipt of a copy of this Agreement
• Understanding of all terms of this Agreement
• That attorney fees are negotiable and not set by law
• Receipt of the State Bar of California publication "The Attorney's Guide to Fee Agreements"

12. LIEN

Attorney shall have a lien on all files, documents, and property of Client in Attorney's possession for payment of fees and costs. Attorney also shall have a lien on any recovery obtained for Client in this matter to secure payment of fees and costs.

13. GENERAL PROVISIONS

A. Entire Agreement: This Agreement constitutes the entire agreement between the parties regarding the subject matter herein and supersedes all prior negotiations, representations, or agreements relating thereto.

B. Modifications: Any modifications must be in writing and signed by both parties.

C. Governing Law: This Agreement is governed by California law and the Rules of Professional Conduct of the State Bar of California.

D. Severability: If any provision is invalid, the remainder shall continue in effect.

E. Assignment: This Agreement may not be assigned by either party without the written consent of the other party.

CLIENT ACKNOWLEDGMENT

I have read and understood this entire Agreement. I have received a copy of this Agreement. I acknowledge that I have been advised of my right to seek independent legal advice regarding this Agreement. I agree to all terms stated herein.

CLIENT:

_________________________________    Date: _______________
${formData.clientName || '[CLIENT NAME]'}

Address: ${formData.clientAddress || '[CLIENT ADDRESS]'}
Phone: ${formData.clientPhone || '[CLIENT PHONE]'}
Email: ${formData.clientEmail || '[CLIENT EMAIL]'}

ATTORNEY:

_________________________________    Date: _______________
Rozsa Gyene, Esq.
State Bar No. 208356

${firmInfo.name}
${firmInfo.address}
${firmInfo.city}
${firmInfo.phone}
${firmInfo.email}

NOTICE TO CLIENT:

This agreement is subject to California Business and Professions Code Section 6148, which requires that certain fee agreements be in writing. You have the right to cancel this agreement within three business days after you sign it by sending written notice to the attorney. If you cancel this agreement within three business days, you will not owe the attorney any fees, although you may be responsible for actual costs incurred by the attorney on your behalf.
    `;
  };

  const generateAssignmentDocument = () => {
    const entityTypeText = {
      'LLC': 'Limited Liability Company',
      'Corporation': 'Corporation',
      'Partnership': 'Partnership',
      'Sole Proprietorship': 'Sole Proprietorship'
    };

    const interestTypeText = {
      'LLC': 'membership interest',
      'Corporation': 'stock interest',
      'Partnership': 'partnership interest',
      'Sole Proprietorship': 'business interest'
    };

    const entityType = formData.entityType || 'LLC';
    const interestType = interestTypeText[entityType];

    return `
ASSIGNMENT OF ${interestType.toUpperCase()}

FOR GOOD AND VALUABLE CONSIDERATION, the receipt and sufficiency of which are hereby acknowledged, ${formData.assignorName || '[ASSIGNOR NAME]'} ("Assignor"), hereby assigns, transfers, and conveys to ${formData.assigneeName || '[ASSIGNEE NAME]'} ("Assignee"), all of Assignor's right, title, and interest in and to the following:

ENTITY INFORMATION:
Entity Name: ${formData.entityName || '[ENTITY NAME]'}
Entity Type: ${entityTypeText[entityType]}
${entityType === 'LLC' ? 'State of Formation: California' : ''}
${entityType === 'Corporation' ? 'State of Incorporation: California' : ''}

INTEREST BEING ASSIGNED:
${entityType === 'LLC' ? `Membership Interest: ${formData.interestPercentage || '[PERCENTAGE]'}% membership interest in the above-named Limited Liability Company` : ''}
${entityType === 'Corporation' ? `Stock Interest: ${formData.numberOfShares || '[NUMBER]'} shares of ${formData.stockClass || 'common'} stock of the above-named Corporation` : ''}
${entityType === 'Partnership' ? `Partnership Interest: ${formData.interestPercentage || '[PERCENTAGE]'}% partnership interest in the above-named Partnership` : ''}
${entityType === 'Sole Proprietorship' ? `Business Interest: ${formData.interestPercentage || '[PERCENTAGE]'}% interest in the assets and business of ${formData.entityName || '[BUSINESS NAME]'}` : ''}

CONSIDERATION:
The consideration for this assignment is: ${formData.consideration || '[CONSIDERATION DESCRIPTION]'}
${formData.considerationAmount ? `Amount: ${formData.considerationAmount}` : ''}

REPRESENTATIONS AND WARRANTIES:
Assignor represents and warrants that:

1. Assignor is the lawful owner of the ${interestType} being assigned and has full right, power, and authority to make this assignment;

2. The ${interestType} is free and clear of all liens, encumbrances, and claims;

3. ${entityType === 'LLC' ? 'This assignment complies with the terms of the LLC Operating Agreement' : ''}
   ${entityType === 'Corporation' ? 'This assignment complies with the Corporate Bylaws and any applicable shareholder agreements' : ''}
   ${entityType === 'Partnership' ? 'This assignment complies with the Partnership Agreement' : ''}
   ${entityType === 'Sole Proprietorship' ? 'Assignor has the right to assign this business interest' : ''};

4. ${entityType !== 'Sole Proprietorship' ? `All required consents from other ${entityType === 'LLC' ? 'members' : entityType === 'Corporation' ? 'shareholders' : 'partners'} have been obtained, or no such consents are required` : 'All necessary business licenses and permits are in good standing'};

5. No person or entity has any agreement or option to purchase the ${interestType} being assigned;

6. This assignment will not violate any law, regulation, court order, or agreement binding upon Assignor.

ASSUMPTION OF OBLIGATIONS:
${formData.assumeObligations === 'yes' ? `Assignee hereby assumes and agrees to perform all obligations and liabilities associated with the ${interestType} being assigned, including but not limited to:
• ${entityType === 'LLC' ? 'Capital contribution obligations under the Operating Agreement' : ''}
• ${entityType === 'Corporation' ? 'Any unpaid amounts on shares being assigned' : ''}
• ${entityType === 'Partnership' ? 'Capital contribution and partnership obligations' : ''}
• ${entityType === 'Sole Proprietorship' ? 'Business debts and obligations proportionate to interest assigned' : ''}
• Compliance with all applicable laws and regulations` : `This assignment is made without assumption of any obligations or liabilities by Assignee. Assignor retains all obligations and liabilities associated with the ${interestType} prior to the effective date of this assignment.`}

EFFECTIVE DATE:
This assignment shall be effective as of ${formData.effectiveDate || '[DATE]'}.

${entityType === 'LLC' ? `OPERATING AGREEMENT:
This assignment is subject to all terms and conditions of the Operating Agreement of the LLC. Assignee agrees to be bound by all provisions of such Operating Agreement.` : ''}

${entityType === 'Corporation' ? `CORPORATE DOCUMENTS:
This assignment is subject to all terms and conditions of the Corporate Bylaws and Articles of Incorporation. Assignee agrees to be bound by all provisions of such corporate documents.` : ''}

${entityType === 'Partnership' ? `PARTNERSHIP AGREEMENT:
This assignment is subject to all terms and conditions of the Partnership Agreement. Assignee agrees to be bound by all provisions of such Partnership Agreement.` : ''}

FURTHER ASSURANCES:
Assignor agrees to execute and deliver such other documents and take such other actions as may be reasonably necessary to effectuate this assignment.

BINDING EFFECT:
This assignment shall be binding upon and inure to the benefit of the parties hereto and their respective heirs, successors, and assigns.

GOVERNING LAW:
This assignment shall be governed by and construed in accordance with the laws of the State of California.

IN WITNESS WHEREOF, the parties have executed this Assignment as of the date first written above.

ASSIGNOR:

_________________________________    Date: _______________
${formData.assignorName || '[ASSIGNOR NAME]'}
${formData.assignorTitle ? formData.assignorTitle : ''}

Address: ${formData.assignorAddress || '[ASSIGNOR ADDRESS]'}

ASSIGNEE:

_________________________________    Date: _______________
${formData.assigneeName || '[ASSIGNEE NAME]'}
${formData.assigneeTitle ? formData.assigneeTitle : ''}

Address: ${formData.assigneeAddress || '[ASSIGNEE ADDRESS]'}

${formData.notarization === 'yes' ? `
STATE OF CALIFORNIA   )
                     ) ss.
COUNTY OF LOS ANGELES )

On ${formData.notaryDate || '[DATE]'}, before me, _________________________, Notary Public, personally appeared ${formData.assignorName || '[ASSIGNOR NAME]'} and ${formData.assigneeName || '[ASSIGNEE NAME]'}, who proved to me on the basis of satisfactory evidence to be the persons whose names are subscribed to the within instrument and acknowledged to me that they executed the same in their authorized capacities, and that by their signatures on the instrument the persons, or the entity upon behalf of which the persons acted, executed the instrument.

I certify under PENALTY OF PERJURY under the laws of the State of California that the foregoing paragraph is true and correct.

WITNESS my hand and official seal.

Signature _________________________

[Notary Seal]
` : ''}

This document was prepared by:
${firmInfo.name}
${firmInfo.address}
${firmInfo.city}
${firmInfo.phone}
Attorney for the Parties

${entityType === 'Corporation' ? `
ATTACHMENT A - STOCK CERTIFICATE INFORMATION
Certificate Number: ${formData.certificateNumber || '[CERTIFICATE NUMBER]'}
Date of Original Issuance: ${formData.originalIssuanceDate || '[DATE]'}
Par Value: ${formData.parValue || 'No Par Value'}
` : ''}

${formData.scheduleA ? `
SCHEDULE A - DETAILED DESCRIPTION OF ASSETS
${formData.scheduleA}
` : ''}
    `;
  };

  const renderFormFields = () => {
    switch (selectedDocument) {
    case 'trust':
  return (
    <div className="form-grid">
      <div className="form-group">
        <label>Trust Name</label>
        <input
          type="text"
          value={formData.trustName || ''}
          onChange={(e) => handleInputChange('trustName', e.target.value)}
          placeholder="Enter trust name"
        />
      </div>
      <div className="form-group">
        <label>Trust Date</label>
        <input
          type="date"
          value={formData.trustDate || ''}
          onChange={(e) => handleInputChange('trustDate', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Governing State</label>
        <input
          type="text"
          value={formData.governingState || ''}
          onChange={(e) => handleInputChange('governingState', e.target.value)}
          placeholder="e.g., California"
        />
      </div>
      <div className="form-group">
        <label>Trust Property Description</label>
        <textarea
          value={formData.trustProperty || ''}
          onChange={(e) => handleInputChange('trustProperty', e.target.value)}
          placeholder="Describe the property being placed in trust"
        />
      </div>
      <div className="form-group">
        <label>Grantor 1 Name</label>
        <input
          type="text"
          value={formData.grantor1Name || ''}
          onChange={(e) => handleInputChange('grantor1Name', e.target.value)}
          placeholder="Enter first grantor name"
        />
      </div>
      <div className="form-group">
        <label>Grantor 2 Name</label>
        <input
          type="text"
          value={formData.grantor2Name || ''}
          onChange={(e) => handleInputChange('grantor2Name', e.target.value)}
          placeholder="Enter second grantor name"
        />
      </div>
      <div className="form-group">
        <label>Trustee Name</label>
        <input
          type="text"
          value={formData.trusteeName || ''}
          onChange={(e) => handleInputChange('trusteeName', e.target.value)}
          placeholder="Enter trustee name"
        />
      </div>
      <div className="form-group">
        <label>Successor Trustee 1</label>
        <input
          type="text"
          value={formData.successorTrustee1 || ''}
          onChange={(e) => handleInputChange('successorTrustee1', e.target.value)}
          placeholder="Enter first successor trustee"
        />
      </div>
      <div className="form-group">
        <label>Successor Trustee 2</label>
        <input
          type="text"
          value={formData.successorTrustee2 || ''}
          onChange={(e) => handleInputChange('successorTrustee2', e.target.value)}
          placeholder="Enter second successor trustee"
        />
      </div>
      <div className="form-group">
        <label>Number of Children</label>
        <input
          type="number"
          value={formData.numberOfChildren || ''}
          onChange={(e) => handleInputChange('numberOfChildren', e.target.value)}
          placeholder="Enter number of children"
        />
      </div>
      <div className="form-group">
        <label>Child 1 Name</label>
        <input
          type="text"
          value={formData.child1Name || ''}
          onChange={(e) => handleInputChange('child1Name', e.target.value)}
          placeholder="Enter first child's name"
        />
      </div>
      <div className="form-group">
        <label>Child 1 Date of Birth</label>
        <input
          type="date"
          value={formData.child1DOB || ''}
          onChange={(e) => handleInputChange('child1DOB', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Child 2 Name</label>
        <input
          type="text"
          value={formData.child2Name || ''}
          onChange={(e) => handleInputChange('child2Name', e.target.value)}
          placeholder="Enter second child's name"
        />
      </div>
      <div className="form-group">
        <label>Child 2 Date of Birth</label>
        <input
          type="date"
          value={formData.child2DOB || ''}
          onChange={(e) => handleInputChange('child2DOB', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Beneficiary 1 Name</label>
        <input
          type="text"
          value={formData.beneficiary1Name || ''}
          onChange={(e) => handleInputChange('beneficiary1Name', e.target.value)}
          placeholder="Enter beneficiary name"
        />
      </div>
      <div className="form-group">
        <label>Beneficiary 1 Relationship</label>
        <select
          value={formData.beneficiary1Relationship || ''}
          onChange={(e) => handleInputChange('beneficiary1Relationship', e.target.value)}
        >
          <option value="">Select Relationship</option>
          <option value="son">Son</option>
          <option value="daughter">Daughter</option>
          <option value="spouse">Spouse</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label>Beneficiary 1 Share %</label>
        <input
          type="number"
          value={formData.beneficiary1Share || ''}
          onChange={(e) => handleInputChange('beneficiary1Share', e.target.value)}
          placeholder="Enter percentage"
        />
      </div>
      <div className="form-group">
        <label>Beneficiary 2 Name</label>
        <input
          type="text"
          value={formData.beneficiary2Name || ''}
          onChange={(e) => handleInputChange('beneficiary2Name', e.target.value)}
          placeholder="Enter beneficiary name"
        />
      </div>
      <div className="form-group">
        <label>Beneficiary 2 Relationship</label>
        <select
          value={formData.beneficiary2Relationship || ''}
          onChange={(e) => handleInputChange('beneficiary2Relationship', e.target.value)}
        >
          <option value="">Select Relationship</option>
          <option value="son">Son</option>
          <option value="daughter">Daughter</option>
          <option value="spouse">Spouse</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label>Beneficiary 2 Share %</label>
        <input
          type="number"
          value={formData.beneficiary2Share || ''}
          onChange={(e) => handleInputChange('beneficiary2Share', e.target.value)}
          placeholder="Enter percentage"
        />
      </div>
      <div className="form-group">
        <label>Beneficiary 3 Name</label>
        <input
          type="text"
          value={formData.beneficiary3Name || ''}
          onChange={(e) => handleInputChange('beneficiary3Name', e.target.value)}
          placeholder="Enter beneficiary name"
        />
      </div>
      <div className="form-group">
        <label>Beneficiary 3 Relationship</label>
        <select
          value={formData.beneficiary3Relationship || ''}
          onChange={(e) => handleInputChange('beneficiary3Relationship', e.target.value)}
        >
          <option value="">Select Relationship</option>
          <option value="son">Son</option>
          <option value="daughter">Daughter</option>
          <option value="spouse">Spouse</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label>Beneficiary 3 Share %</label>
        <input
          type="number"
          value={formData.beneficiary3Share || ''}
          onChange={(e) => handleInputChange('beneficiary3Share', e.target.value)}
          placeholder="Enter percentage"
        />
      </div>
      <div className="form-group">
        <label>Beneficiary 4 Name</label>
        <input
          type="text"
          value={formData.beneficiary4Name || ''}
          onChange={(e) => handleInputChange('beneficiary4Name', e.target.value)}
          placeholder="Enter beneficiary name"
        />
      </div>
      <div className="form-group">
        <label>Beneficiary 4 Relationship</label>
        <select
          value={formData.beneficiary4Relationship || ''}
          onChange={(e) => handleInputChange('beneficiary4Relationship', e.target.value)}
        >
          <option value="">Select Relationship</option>
          <option value="son">Son</option>
          <option value="daughter">Daughter</option>
          <option value="spouse">Spouse</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label>Beneficiary 4 Share %</label>
        <input
          type="number"
          value={formData.beneficiary4Share || ''}
          onChange={(e) => handleInputChange('beneficiary4Share', e.target.value)}
          placeholder="Enter percentage"
        />
      </div>
      <div className="form-group">
        <label>Notary State</label>
        <input
          type="text"
          value={formData.notaryState || ''}
          onChange={(e) => handleInputChange('notaryState', e.target.value)}
          placeholder="Enter state"
        />
      </div>
      <div className="form-group">
        <label>Notary County</label>
        <input
          type="text"
          value={formData.notaryCounty || ''}
          onChange={(e) => handleInputChange('notaryCounty', e.target.value)}
          placeholder="Enter county"
        />
      </div>
    </div>
  );       

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
              <label>Pre-Trial Percentage</label>
              <select
                value={formData.preTrialPercentage || '33'}
                onChange={(e) => handleInputChange('preTrialPercentage', e.target.value)}
              >
                <option value="25">25%</option>
                <option value="33">33%</option>
                <option value="40">40%</option>
              </select>
            </div>
            <div className="form-group">
              <label>Trial Percentage</label>
              <select
                value={formData.trialPercentage || '40'}
                onChange={(e) => handleInputChange('trialPercentage', e.target.value)}
              >
                <option value="33">33%</option>
                <option value="40">40%</option>
                <option value="45">45%</option>
              </select>
            </div>
            <div className="form-group">
              <label>Property Address</label>
              <input
                type="text"
                value={formData.propertyAddress || ''}
                onChange={(e) => handleInputChange('propertyAddress', e.target.value)}
                placeholder="Enter property address (if applicable)"
              />
            </div>
            <div className="form-group">
              <label>Client Address</label>
              <input
                type="text"
                value={formData.clientAddress || ''}
                onChange={(e) => handleInputChange('clientAddress', e.target.value)}
                placeholder="Enter client address"
              />
            </div>
            <div className="form-group">
              <label>Client Phone</label>
              <input
                type="tel"
                value={formData.clientPhone || ''}
                onChange={(e) => handleInputChange('clientPhone', e.target.value)}
                placeholder="Enter client phone"
              />
            </div>
            <div className="form-group">
              <label>Client Email</label>
              <input
                type="email"
                value={formData.clientEmail || ''}
                onChange={(e) => handleInputChange('clientEmail', e.target.value)}
                placeholder="Enter client email"
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

      case 'articles':
        return (
          <div className="form-grid">
            <div className="form-group">
              <label>Corporation Name</label>
              <input
                type="text"
                value={formData.corpName || ''}
                onChange={(e) => handleInputChange('corpName', e.target.value)}
                placeholder="Enter corporation name"
              />
            </div>
            <div className="form-group">
              <label>Business Purpose</label>
              <textarea
                value={formData.businessPurpose || ''}
                onChange={(e) => handleInputChange('businessPurpose', e.target.value)}
                placeholder="Describe the specific business purpose"
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
              <label>Authorized Shares</label>
              <input
                type="number"
                value={formData.authorizedShares || ''}
                onChange={(e) => handleInputChange('authorizedShares', e.target.value)}
                placeholder="Enter number of authorized shares"
              />
            </div>
            <div className="form-group">
              <label>Number of Directors</label>
              <input
                type="number"
                value={formData.numberOfDirectors || ''}
                onChange={(e) => handleInputChange('numberOfDirectors', e.target.value)}
                placeholder="Enter number of directors"
              />
            </div>
            <div className="form-group">
              <label>Director 1 Name</label>
              <input
                type="text"
                value={formData.director1Name || ''}
                onChange={(e) => handleInputChange('director1Name', e.target.value)}
                placeholder="Enter director 1 name"
              />
            </div>
            <div className="form-group">
              <label>Director 1 Address</label>
              <input
                type="text"
                value={formData.director1Address || ''}
                onChange={(e) => handleInputChange('director1Address', e.target.value)}
                placeholder="Enter director 1 address"
              />
            </div>
            <div className="form-group">
              <label>Director 2 Name</label>
              <input
                type="text"
                value={formData.director2Name || ''}
                onChange={(e) => handleInputChange('director2Name', e.target.value)}
                placeholder="Enter director 2 name"
              />
            </div>
            <div className="form-group">
              <label>Director 2 Address</label>
              <input
                type="text"
                value={formData.director2Address || ''}
                onChange={(e) => handleInputChange('director2Address', e.target.value)}
                placeholder="Enter director 2 address"
              />
            </div>
            <div className="form-group">
              <label>Director 3 Name</label>
              <input
                type="text"
                value={formData.director3Name || ''}
                onChange={(e) => handleInputChange('director3Name', e.target.value)}
                placeholder="Enter director 3 name"
              />
            </div>
            <div className="form-group">
              <label>Director 3 Address</label>
              <input
                type="text"
                value={formData.director3Address || ''}
                onChange={(e) => handleInputChange('director3Address', e.target.value)}
                placeholder="Enter director 3 address"
              />
            </div>
            <div className="form-group">
              <label>Incorporator Name</label>
              <input
                type="text"
                value={formData.incorporatorName || ''}
                onChange={(e) => handleInputChange('incorporatorName', e.target.value)}
                placeholder="Enter incorporator name"
              />
            </div>
            <div className="form-group">
              <label>Incorporator Address</label>
              <input
                type="text"
                value={formData.incorporatorAddress || ''}
                onChange={(e) => handleInputChange('incorporatorAddress', e.target.value)}
                placeholder="Enter incorporator address"
              />
            </div>
            <div className="form-group">
              <label>Incorporation Date</label>
              <input
                type="date"
                value={formData.incorporationDate || ''}
                onChange={(e) => handleInputChange('incorporationDate', e.target.value)}
              />
            </div>
          </div>
        );

      case 'bylaws':
        return (
          <div className="form-grid">
            <div className="form-group">
              <label>Corporation Name</label>
              <input
                type="text"
                value={formData.corpName || ''}
                onChange={(e) => handleInputChange('corpName', e.target.value)}
                placeholder="Enter corporation name"
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
              <label>Annual Meeting Date</label>
              <input
                type="text"
                value={formData.annualMeetingDate || ''}
                onChange={(e) => handleInputChange('annualMeetingDate', e.target.value)}
                placeholder="e.g., the first Monday in May"
              />
            </div>
            <div className="form-group">
              <label>Annual Meeting Time</label>
              <input
                type="text"
                value={formData.annualMeetingTime || ''}
                onChange={(e) => handleInputChange('annualMeetingTime', e.target.value)}
                placeholder="e.g., 10:00 a.m."
              />
            </div>
            <div className="form-group">
              <label>Number of Directors</label>
              <input
                type="text"
                value={formData.numberOfDirectors || ''}
                onChange={(e) => handleInputChange('numberOfDirectors', e.target.value)}
                placeholder="e.g., three (3)"
              />
            </div>
            <div className="form-group">
              <label>Secretary Name</label>
              <input
                type="text"
                value={formData.secretaryName || ''}
                onChange={(e) => handleInputChange('secretaryName', e.target.value)}
                placeholder="Enter secretary name"
              />
            </div>
            <div className="form-group">
              <label>Bylaws Adoption Date</label>
              <input
                type="date"
                value={formData.bylawsDate || ''}
                onChange={(e) => handleInputChange('bylawsDate', e.target.value)}
              />
            </div>
          </div>
        );

      case 'retainer':
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
            <div className="form-group">
              <label>Retainer Amount</label>
              <input
                type="number"
                value={formData.retainerAmount || ''}
                onChange={(e) => handleInputChange('retainerAmount', e.target.value)}
                placeholder="Enter retainer amount"
              />
            </div>
            <div className="form-group">
              <label>Hourly Rate</label>
              <input
                type="text"
                value={formData.hourlyRate || ''}
                onChange={(e) => handleInputChange('hourlyRate', e.target.value)}
                placeholder="e.g., $400"
              />
            </div>
            <div className="form-group">
              <label>Paralegal Rate</label>
              <input
                type="text"
                value={formData.paralegalRate || ''}
                onChange={(e) => handleInputChange('paralegalRate', e.target.value)}
                placeholder="e.g., $150"
              />
            </div>
            <div className="form-group">
              <label>Admin Rate</label>
              <input
                type="text"
                value={formData.adminRate || ''}
                onChange={(e) => handleInputChange('adminRate', e.target.value)}
                placeholder="e.g., $75"
              />
            </div>
            <div className="form-group">
              <label>Replenishment Amount</label>
              <input
                type="number"
                value={formData.replenishmentAmount || ''}
                onChange={(e) => handleInputChange('replenishmentAmount', e.target.value)}
                placeholder="Amount to trigger retainer replenishment"
              />
            </div>
            <div className="form-group">
              <label>Copying Rate</label>
              <input
                type="text"
                value={formData.copyingRate || ''}
                onChange={(e) => handleInputChange('copyingRate', e.target.value)}
                placeholder="e.g., 0.25"
              />
            </div>
            <div className="form-group">
              <label>Client Address</label>
              <input
                type="text"
                value={formData.clientAddress || ''}
                onChange={(e) => handleInputChange('clientAddress', e.target.value)}
                placeholder="Enter client address"
              />
            </div>
            <div className="form-group">
              <label>Client Phone</label>
              <input
                type="tel"
                value={formData.clientPhone || ''}
                onChange={(e) => handleInputChange('clientPhone', e.target.value)}
                placeholder="Enter client phone"
              />
            </div>
            <div className="form-group">
              <label>Client Email</label>
              <input
                type="email"
                value={formData.clientEmail || ''}
                onChange={(e) => handleInputChange('clientEmail', e.target.value)}
                placeholder="Enter client email"
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

      case 'assignment':
        return (
          <div className="form-grid">
            <div className="form-group">
              <label>Entity Type</label>
              <select
                value={formData.entityType || 'LLC'}
                onChange={(e) => handleInputChange('entityType', e.target.value)}
              >
                <option value="LLC">LLC</option>
                <option value="Corporation">Corporation</option>
                <option value="Partnership">Partnership</option>
                <option value="Sole Proprietorship">Sole Proprietorship</option>
              </select>
            </div>
            <div className="form-group">
              <label>Entity Name</label>
              <input
                type="text"
                value={formData.entityName || ''}
                onChange={(e) => handleInputChange('entityName', e.target.value)}
                placeholder="Enter entity/business name"
              />
            </div>
            <div className="form-group">
              <label>Assignor Name</label>
              <input
                type="text"
                value={formData.assignorName || ''}
                onChange={(e) => handleInputChange('assignorName', e.target.value)}
                placeholder="Person/entity assigning interest"
              />
            </div>
            <div className="form-group">
              <label>Assignor Title (if applicable)</label>
              <input
                type="text"
                value={formData.assignorTitle || ''}
                onChange={(e) => handleInputChange('assignorTitle', e.target.value)}
                placeholder="e.g., Member, Shareholder"
              />
            </div>
            <div className="form-group">
              <label>Assignor Address</label>
              <input
                type="text"
                value={formData.assignorAddress || ''}
                onChange={(e) => handleInputChange('assignorAddress', e.target.value)}
                placeholder="Enter assignor address"
              />
            </div>
            <div className="form-group">
              <label>Assignee Name</label>
              <input
                type="text"
                value={formData.assigneeName || ''}
                onChange={(e) => handleInputChange('assigneeName', e.target.value)}
                placeholder="Person/entity receiving interest"
              />
            </div>
            <div className="form-group">
              <label>Assignee Title (if applicable)</label>
              <input
                type="text"
                value={formData.assigneeTitle || ''}
                onChange={(e) => handleInputChange('assigneeTitle', e.target.value)}
                placeholder="e.g., New Member, New Shareholder"
              />
            </div>
            <div className="form-group">
              <label>Assignee Address</label>
              <input
                type="text"
                value={formData.assigneeAddress || ''}
                onChange={(e) => handleInputChange('assigneeAddress', e.target.value)}
                placeholder="Enter assignee address"
              />
            </div>
            {(formData.entityType === 'LLC' || formData.entityType === 'Partnership' || formData.entityType === 'Sole Proprietorship' || !formData.entityType) && (
              <div className="form-group">
                <label>Interest Percentage</label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.interestPercentage || ''}
                  onChange={(e) => handleInputChange('interestPercentage', e.target.value)}
                  placeholder="Enter percentage (e.g., 25.5)"
                />
              </div>
            )}
            {formData.entityType === 'Corporation' && (
              <>
                <div className="form-group">
                  <label>Number of Shares</label>
                  <input
                    type="number"
                    value={formData.numberOfShares || ''}
                    onChange={(e) => handleInputChange('numberOfShares', e.target.value)}
                    placeholder="Enter number of shares"
                  />
                </div>
                <div className="form-group">
                  <label>Stock Class</label>
                  <input
                    type="text"
                    value={formData.stockClass || ''}
                    onChange={(e) => handleInputChange('stockClass', e.target.value)}
                    placeholder="e.g., common, preferred"
                  />
                </div>
                <div className="form-group">
                  <label>Certificate Number</label>
                  <input
                    type="text"
                    value={formData.certificateNumber || ''}
                    onChange={(e) => handleInputChange('certificateNumber', e.target.value)}
                    placeholder="Stock certificate number"
                  />
                </div>
                <div className="form-group">
                  <label>Original Issuance Date</label>
                  <input
                    type="date"
                    value={formData.originalIssuanceDate || ''}
                    onChange={(e) => handleInputChange('originalIssuanceDate', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Par Value</label>
                  <input
                    type="text"
                    value={formData.parValue || ''}
                    onChange={(e) => handleInputChange('parValue', e.target.value)}
                    placeholder="e.g., $1.00 or No Par Value"
                  />
                </div>
              </>
            )}
            <div className="form-group">
              <label>Consideration Description</label>
              <textarea
                value={formData.consideration || ''}
                onChange={(e) => handleInputChange('consideration', e.target.value)}
                placeholder="Describe what is being paid/exchanged for the interest"
              />
            </div>
            <div className="form-group">
              <label>Consideration Amount (if monetary)</label>
              <input
                type="number"
                step="0.01"
                value={formData.considerationAmount || ''}
                onChange={(e) => handleInputChange('considerationAmount', e.target.value)}
                placeholder="Enter dollar amount"
              />
            </div>
            <div className="form-group">
              <label>Assume Obligations?</label>
              <select
                value={formData.assumeObligations || 'no'}
                onChange={(e) => handleInputChange('assumeObligations', e.target.value)}
              >
                <option value="no">No - Assignor retains obligations</option>
                <option value="yes">Yes - Assignee assumes obligations</option>
              </select>
            </div>
            <div className="form-group">
              <label>Require Notarization?</label>
              <select
                value={formData.notarization || 'no'}
                onChange={(e) => handleInputChange('notarization', e.target.value)}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
            {formData.notarization === 'yes' && (
              <div className="form-group">
                <label>Notary Date</label>
                <input
                  type="date"
                  value={formData.notaryDate || ''}
                  onChange={(e) => handleInputChange('notaryDate', e.target.value)}
                />
              </div>
            )}
            <div className="form-group">
              <label>Effective Date</label>
              <input
                type="date"
                value={formData.effectiveDate || ''}
                onChange={(e) => handleInputChange('effectiveDate', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Schedule A - Asset Details (optional)</label>
              <textarea
                value={formData.scheduleA || ''}
                onChange={(e) => handleInputChange('scheduleA', e.target.value)}
                placeholder="Detailed description of specific assets being assigned (optional)"
              />
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
