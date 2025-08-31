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
    { id: 'trust', name: 'Irrevocable Trust', icon: Shield }
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
    return `
THE ${formData.trustName?.toUpperCase() || '[TRUST NAME]'} IRREVOCABLE TRUST

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
OPERATING AGREEMENT
OF
${formData.companyName || '[COMPANY NAME]'}, LLC

This Operating Agreement ("Agreement") is made effective as of ${formData.effectiveDate || '[DATE]'}, by and among ${formData.member1Name || '[MEMBER 1 NAME]'} and ${formData.member2Name || '[MEMBER 2 NAME]'} (collectively, the "Members"), for the purpose of establishing the rights, duties, and obligations of the Members of ${formData.companyName || '[COMPANY NAME]'}, LLC, a California limited liability company (the "Company").

RECITALS

WHEREAS, the Members desire to form a limited liability company under the laws of the State of California; and

WHEREAS, the Members desire to set forth their agreement regarding the governance and operation of the Company;

NOW, THEREFORE, in consideration of the mutual covenants and agreements contained herein, the parties agree as follows:

ARTICLE I
FORMATION AND PURPOSE

1.1 Formation. The Company has been formed as a limited liability company under the laws of the State of California by the filing of Articles of Organization with the California Secretary of State.

1.2 Name. The name of the Company is ${formData.companyName || '[COMPANY NAME]'}, LLC.

1.3 Purpose. The purpose of the Company is ${formData.businessPurpose || '[BUSINESS PURPOSE]'} and any other lawful business purpose.

1.4 Principal Office. The principal office of the Company shall be located at ${formData.principalAddress || '[PRINCIPAL ADDRESS]'}.

1.5 Term. The Company shall continue in existence until dissolved in accordance with this Agreement or applicable law.

ARTICLE II
MEMBERS AND MEMBERSHIP INTERESTS

2.1 Members. The Members and their respective membership interests are as follows:

${formData.member1Name || '[MEMBER 1 NAME]'}: ${formData.member1Percentage || '[PERCENTAGE]'}%
${formData.member2Name || '[MEMBER 2 NAME]'}: ${formData.member2Percentage || '[PERCENTAGE]'}%

2.2 Additional Members. New members may be admitted to the Company only with the unanimous consent of all existing Members.

ARTICLE III
MANAGEMENT

3.1 Management by Members. The Company shall be managed by its Members.

3.2 Authority of Members. Each Member has the authority to bind the Company in the ordinary course of business.

3.3 Voting. Decisions requiring Member approval shall be made by ${formData.votingRequirement || '[VOTING REQUIREMENT]'} of the Members.

ARTICLE IV
CAPITAL CONTRIBUTIONS

4.1 Initial Contributions. The Members have made the following initial capital contributions:

${formData.member1Name || '[MEMBER 1 NAME]'}: $${formData.member1Contribution || '[AMOUNT]'}
${formData.member2Name || '[MEMBER 2 NAME]'}: $${formData.member2Contribution || '[AMOUNT]'}

4.2 Additional Contributions. No Member shall be required to make additional capital contributions without the unanimous consent of all Members.

ARTICLE V
DISTRIBUTIONS

5.1 Distributions. Distributions shall be made to Members in proportion to their membership interests.

5.2 Timing. Distributions shall be made at such times as determined by the Members.

ARTICLE VI
BOOKS AND RECORDS

6.1 Books and Records. The Company shall maintain complete and accurate books and records of its business and affairs.

6.2 Access. Each Member shall have the right to inspect the Company's books and records during regular business hours.

ARTICLE VII
DISSOLUTION

7.1 Events of Dissolution. The Company shall be dissolved upon:
(a) The unanimous agreement of all Members;
(b) The occurrence of any event that makes it unlawful for the Company to continue; or
(c) Entry of a decree of judicial dissolution.

IN WITNESS WHEREOF, the Members have executed this Agreement as of the date first written above.

${formData.member1Name || '[MEMBER 1 NAME]'}

${formData.member2Name || '[MEMBER 2 NAME]'}

Prepared by:
${firmInfo.name}
${firmInfo.address}
${firmInfo.city}
${firmInfo.phone}
${firmInfo.email}
`;
  };

  const generatePrenupDocument = () => {
    return `
PREMARITAL AGREEMENT

This Premarital Agreement ("Agreement") is entered into on ${formData.agreementDate || '[DATE]'}, between ${formData.party1Name || '[PARTY 1 NAME]'} ("Party 1") and ${formData.party2Name || '[PARTY 2 NAME]'} ("Party 2"), who plan to marry each other.

RECITALS

WHEREAS, the parties contemplate marriage and desire to establish their respective rights and obligations regarding property and financial matters;

WHEREAS, each party has been advised to seek independent legal counsel;

WHEREAS, each party has made full and fair disclosure of their assets and liabilities;

NOW, THEREFORE, the parties agree as follows:

1. PROPERTY RIGHTS

1.1 Separate Property. Each party's separate property, including all property owned prior to marriage and any property acquired during marriage by gift or inheritance, shall remain that party's separate property.

1.2 Community Property. Property acquired during marriage through the efforts of either party shall be community property, except as otherwise provided in this Agreement.

2. FINANCIAL RESPONSIBILITIES

2.1 Pre-Marital Debts. Each party shall be solely responsible for their pre-marital debts and obligations.

2.2 Marital Expenses. The parties shall share responsibility for marital living expenses as follows: ${formData.expenseSharing || '[EXPENSE SHARING ARRANGEMENT]'}.

3. SPOUSAL SUPPORT

In the event of dissolution of marriage, each party waives any right to spousal support from the other, except as follows: ${formData.spousalSupport || '[SPOUSAL SUPPORT PROVISIONS]'}.

4. ESTATE RIGHTS

Each party waives all rights to the other's estate that would arise by operation of law, except for any specific provisions made by will or trust.

5. DISCLOSURE

Each party acknowledges receiving full disclosure of the other party's assets and liabilities as set forth in the attached financial statements.

6. INDEPENDENT COUNSEL

Each party acknowledges having been advised of their right to independent legal counsel and having either consulted with counsel or voluntarily waived such right.

7. ENFORCEABILITY

This Agreement shall be binding upon the parties and their heirs, successors, and assigns.

IN WITNESS WHEREOF, the parties have executed this Agreement on the date first written above.

${formData.party1Name || '[PARTY 1 NAME]'}

${formData.party2Name || '[PARTY 2 NAME]'}

Prepared by:
${firmInfo.name}
${firmInfo.address}
${firmInfo.city}
${firmInfo.phone}
${firmInfo.email}
`;
  };

  const generateContingencyDocument = () => {
    return `
CONTINGENCY FEE AGREEMENT

This Contingency Fee Agreement ("Agreement") is entered into on ${formData.agreementDate || '[DATE]'}, between ${firmInfo.name}, a professional corporation ("Attorney"), and ${formData.clientName || '[CLIENT NAME]'} ("Client").

1. LEGAL SERVICES

Attorney agrees to represent Client in the matter of: ${formData.legalMatter || '[LEGAL MATTER DESCRIPTION]'}.

2. ATTORNEY'S FEES

2.1 Contingency Fee. Attorney's fee shall be ${formData.contingencyPercentage || '[PERCENTAGE]'}% of any recovery obtained for Client, whether by settlement, judgment, or otherwise.

2.2 No Recovery, No Fee. If no recovery is obtained for Client, Client will owe no attorney's fees to Attorney.

3. COSTS AND EXPENSES

3.1 Client Responsibility. Client shall be responsible for all costs and expenses incurred in connection with this matter, including but not limited to:
- Court filing fees
- Deposition costs
- Expert witness fees
- Investigation expenses
- Medical records and reports

3.2 Cost Advancement. Attorney may advance costs on Client's behalf, but Client remains ultimately responsible for reimbursement.

4. SETTLEMENT AUTHORITY

Client retains the right to accept or reject any settlement offer. Attorney will not settle this matter without Client's written consent.

5. TERMINATION

Either party may terminate this Agreement upon written notice. Upon termination:
- Client remains responsible for costs incurred
- If Attorney withdraws for good cause, Attorney may seek compensation for services rendered

6. OTHER ATTORNEYS

If Client terminates this Agreement and retains other counsel who obtains a recovery, Attorney may be entitled to compensation based on the reasonable value of services rendered.

BY SIGNING BELOW, CLIENT ACKNOWLEDGES:
- Reading and understanding this Agreement
- Having the opportunity to consult with independent counsel
- Understanding the financial terms and obligations

Client Signature: ___________________________ Date: ___________
${formData.clientName || '[CLIENT NAME]'}

Attorney Signature: _________________________ Date: ___________
Attorney for ${firmInfo.name}

Prepared by:
${firmInfo.name}
${firmInfo.address}
${firmInfo.city}
${firmInfo.phone}
${firmInfo.email}
`;
  };

  const generateArticlesDocument = () => {
    return `
ARTICLES OF INCORPORATION
OF
${formData.corporationName || '[CORPORATION NAME]'}

The undersigned, for the purpose of forming a corporation under the laws of the State of California, hereby certifies:

ARTICLE I - NAME

The name of this corporation is ${formData.corporationName || '[CORPORATION NAME]'}.

ARTICLE II - PURPOSE

The purpose of this corporation is to engage in any lawful act or activity for which a corporation may be organized under the General Corporation Law of California other than the banking business, the trust company business, or the practice of a profession permitted to be incorporated by the California Corporations Code.

ARTICLE III - AGENT FOR SERVICE OF PROCESS

The name and address of the corporation's initial agent for service of process is:
${formData.agentName || '[AGENT NAME]'}
${formData.agentAddress || '[AGENT ADDRESS]'}

ARTICLE IV - SHARES

This corporation is authorized to issue ${formData.authorizedShares || '[NUMBER]'} shares of common stock.

ARTICLE V - INCORPORATOR

The name and address of the incorporator is:
${formData.incorporatorName || '[INCORPORATOR NAME]'}
${formData.incorporatorAddress || '[INCORPORATOR ADDRESS]'}

ARTICLE VI - DIRECTORS

The corporation shall have ${formData.numberOfDirectors || '[NUMBER]'} director(s). The name(s) and address(es) of the initial director(s) are:

${formData.director1Name || '[DIRECTOR 1 NAME]'}
${formData.director1Address || '[DIRECTOR 1 ADDRESS]'}

${formData.director2Name || '[DIRECTOR 2 NAME]'}
${formData.director2Address || '[DIRECTOR 2 ADDRESS]'}

Date: ${formData.incorporationDate || '[DATE]'}

________________________________
${formData.incorporatorName || '[INCORPORATOR NAME]'}, Incorporator

Prepared by:
${firmInfo.name}
${firmInfo.address}
${firmInfo.city}
${firmInfo.phone}
${firmInfo.email}
`;
  };

  const generateBylawsDocument = () => {
    return `
BYLAWS
OF
${formData.corporationName || '[CORPORATION NAME]'}

ARTICLE I - OFFICES

Section 1.01 Principal Office. The principal office of the corporation shall be located at ${formData.principalOffice || '[PRINCIPAL OFFICE ADDRESS]'}.

Section 1.02 Other Offices. The corporation may establish other offices as the Board of Directors may determine.

ARTICLE II - SHAREHOLDERS

Section 2.01 Annual Meeting. An annual meeting of shareholders shall be held on ${formData.annualMeetingDate || '[DATE/DAY]'} of each year at ${formData.meetingTime || '[TIME]'}.

Section 2.02 Special Meetings. Special meetings of shareholders may be called by the President, Board of Directors, or holders of at least ${formData.specialMeetingThreshold || '[PERCENTAGE]'}% of outstanding shares.

Section 2.03 Notice. Written notice of meetings shall be given not less than ${formData.noticeRequired || '[NUMBER]'} days before the meeting.

Section 2.04 Quorum. A majority of outstanding shares entitled to vote shall constitute a quorum.

ARTICLE III - BOARD OF DIRECTORS

Section 3.01 Powers. The business and affairs of the corporation shall be managed by the Board of Directors.

Section 3.02 Number. The number of directors shall be ${formData.numberOfDirectors || '[NUMBER]'}.

Section 3.03 Term. Directors shall serve for ${formData.directorTerm || '[TERM LENGTH]'} or until their successors are elected.

Section 3.04 Meetings. Regular meetings of the Board shall be held ${formData.boardMeetingFrequency || '[FREQUENCY]'}.

Section 3.05 Quorum. A majority of directors shall constitute a quorum.

ARTICLE IV - OFFICERS

Section 4.01 Officers. The officers of the corporation shall be a President, Secretary, and Treasurer, and may include a Vice President.

Section 4.02 President. The President shall be the chief executive officer and shall preside at meetings of shareholders and directors.

Section 4.03 Secretary. The Secretary shall keep minutes of meetings and maintain corporate records.

Section 4.04 Treasurer. The Treasurer shall have custody of corporate funds and maintain financial records.

ARTICLE V - STOCK

Section 5.01 Certificates. Shares shall be represented by certificates signed by the President and Secretary.

Section 5.02 Transfer. Shares shall be transferable on the books of the corporation upon surrender of certificates properly endorsed.

ARTICLE VI - AMENDMENTS

These Bylaws may be amended by the affirmative vote of ${formData.amendmentVote || '[VOTING REQUIREMENT]'} of the Board of Directors or shareholders.

ADOPTED this ${formData.adoptionDate || '[DATE]'}.

Secretary: _________________________

Prepared by:
${firmInfo.name}
${firmInfo.address}
${firmInfo.city}
${firmInfo.phone}
${firmInfo.email}
`;
  };

  const generateRetainerDocument = () => {
    return `
RETAINER AGREEMENT

This Retainer Agreement ("Agreement") is entered into on ${formData.agreementDate || '[DATE]'}, between ${firmInfo.name}, a professional corporation ("Attorney"), and ${formData.clientName || '[CLIENT NAME]'} ("Client").

1. SCOPE OF REPRESENTATION

Attorney agrees to represent Client in the following matter: ${formData.legalMatter || '[LEGAL MATTER DESCRIPTION]'}.

2. ATTORNEY FEES

2.1 Hourly Rate. Attorney's hourly rate is ${firmInfo.hourlyRate}.

2.2 Retainer. Client shall pay a retainer of $${formData.retainerAmount || '[AMOUNT]'} upon signing this Agreement. This retainer will be held in Attorney's trust account and applied against fees and costs as they are incurred.

2.3 Additional Fees. If the retainer is exhausted, Client agrees to replenish it within ${formData.replenishmentPeriod || '[TIME PERIOD]'} of notice from Attorney.

3. COSTS AND EXPENSES

In addition to attorney fees, Client is responsible for all costs and expenses, including:
- Court filing fees
- Service of process fees
- Deposition costs
- Expert witness fees
- Travel expenses
- Copying and postage

4. BILLING AND PAYMENT

4.1 Monthly Statements. Attorney will provide monthly statements showing fees and costs incurred.

4.2 Payment Terms. Payment is due within ${formData.paymentTerms || '[PAYMENT TERMS]'} of the statement date.

4.3 Late Charges. Overdue amounts may be subject to a service charge of ${formData.lateChargeRate || '[RATE]'}% per month.

5. TERMINATION

5.1 Client's Right. Client may terminate this Agreement at any time upon written notice.

5.2 Attorney's Right. Attorney may withdraw from representation as permitted by the California Rules of Professional Conduct.

5.3 Final Accounting. Upon termination, Attorney will provide a final accounting and return any unused portion of the retainer.

6. DISPUTE RESOLUTION

Any dispute regarding fees shall be subject to arbitration under the California Mandatory Fee Arbitration Act.

CLIENT ACKNOWLEDGMENT:
I have read and understand this Agreement. I understand that:
- No guarantee has been made regarding the outcome
- I have the right to seek independent counsel
- I may be liable for attorney fees if I prevail in certain matters

Client Signature: ___________________________ Date: ___________
${formData.clientName || '[CLIENT NAME]'}

Attorney Signature: _________________________ Date: ___________
Attorney for ${firmInfo.name}

Prepared by:
${firmInfo.name}
${firmInfo.address}
${firmInfo.city}
${firmInfo.phone}
${firmInfo.email}
`;
  };

  const generateAssignmentDocument = () => {
    return `
ASSIGNMENT OF INTEREST

This Assignment of Interest ("Assignment") is made on ${formData.assignmentDate || '[DATE]'}, between ${formData.assignorName || '[ASSIGNOR NAME]'} ("Assignor") and ${formData.assigneeName || '[ASSIGNEE NAME]'} ("Assignee").

RECITALS

WHEREAS, Assignor owns ${formData.interestPercentage || '[PERCENTAGE]'}% interest in ${formData.entityName || '[ENTITY NAME]'}, a ${formData.entityType || '[ENTITY TYPE]'} ("Entity");

WHEREAS, Assignor desires to assign such interest to Assignee;

WHEREAS, Assignee desires to acquire such interest from Assignor;

NOW, THEREFORE, for valuable consideration, the parties agree as follows:

1. ASSIGNMENT

Assignor hereby assigns, transfers, and conveys to Assignee all of Assignor's right, title, and interest in and to ${formData.interestPercentage || '[PERCENTAGE]'}% interest in the Entity, including all rights to distributions, voting rights, and other benefits associated with such interest.

2. CONSIDERATION

The consideration for this Assignment is $${formData.considerationAmount || '[AMOUNT]'}, receipt of which is hereby acknowledged.

3. REPRESENTATIONS AND WARRANTIES

3.1 Assignor's Representations. Assignor represents and warrants that:
(a) Assignor is the sole owner of the interest being assigned
(b) The interest is free and clear of all liens and encumbrances
(c) Assignor has full power and authority to make this Assignment

3.2 Assignee's Representations. Assignee represents that they have reviewed all relevant documents regarding the Entity and accept the interest subject to all terms and conditions of the Entity's governing documents.

4. EFFECTIVE DATE

This Assignment shall be effective as of ${formData.effectiveDate || '[DATE]'}.

5. FURTHER ASSURANCES

The parties agree to execute any additional documents reasonably necessary to effectuate this Assignment.

6. GOVERNING LAW

This Assignment shall be governed by the laws of the State of ${formData.governingState || '[STATE]'}.

IN WITNESS WHEREOF, the parties have executed this Assignment as of the date first written above.

ASSIGNOR:

_________________________________
${formData.assignorName || '[ASSIGNOR NAME]'}

ASSIGNEE:

_________________________________
${formData.assigneeName || '[ASSIGNEE NAME]'}

Prepared by:
${firmInfo.name}
${firmInfo.address}
${firmInfo.city}
${firmInfo.phone}
${firmInfo.email}
`;
  };

  const renderFormFields = () => {
    switch (selectedDocument) {
      case 'trust':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Irrevocable Trust Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Trust Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('trustName', e.target.value)}
              />
              <input
                type="date"
                placeholder="Trust Date"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('trustDate', e.target.value)}
              />
              <input
                type="text"
                placeholder="Grantor 1 Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('grantor1Name', e.target.value)}
              />
              <input
                type="text"
                placeholder="Grantor 2 Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('grantor2Name', e.target.value)}
              />
              <input
                type="text"
                placeholder="Trustee Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('trusteeName', e.target.value)}
              />
              <input
                type="text"
                placeholder="Successor Trustee 1"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('successorTrustee1', e.target.value)}
              />
              <input
                type="text"
                placeholder="Successor Trustee 2"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('successorTrustee2', e.target.value)}
              />
              <input
                type="text"
                placeholder="Number of Children"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('numberOfChildren', e.target.value)}
              />
              <input
                type="text"
                placeholder="Child 1 Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('child1Name', e.target.value)}
              />
              <input
                type="date"
                placeholder="Child 1 DOB"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('child1DOB', e.target.value)}
              />
              <input
                type="text"
                placeholder="Child 2 Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('child2Name', e.target.value)}
              />
              <input
                type="date"
                placeholder="Child 2 DOB"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('child2DOB', e.target.value)}
              />
            </div>
            
            <h4 className="text-md font-semibold text-gray-700 mt-6">Beneficiaries</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Beneficiary 1 Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('beneficiary1Name', e.target.value)}
              />
              <input
                type="text"
                placeholder="Relationship (son/daughter)"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('beneficiary1Relationship', e.target.value)}
              />
              <input
                type="number"
                placeholder="Share Percentage"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('beneficiary1Share', e.target.value)}
              />
              <input
                type="text"
                placeholder="Beneficiary 2 Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('beneficiary2Name', e.target.value)}
              />
              <input
                type="text"
                placeholder="Relationship"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('beneficiary2Relationship', e.target.value)}
              />
              <input
                type="number"
                placeholder="Share Percentage"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('beneficiary2Share', e.target.value)}
              />
              <input
                type="text"
                placeholder="Beneficiary 3 Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('beneficiary3Name', e.target.value)}
              />
              <input
                type="text"
                placeholder="Relationship"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('beneficiary3Relationship', e.target.value)}
              />
              <input
                type="number"
                placeholder="Share Percentage"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('beneficiary3Share', e.target.value)}
              />
              <input
                type="text"
                placeholder="Beneficiary 4 Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('beneficiary4Name', e.target.value)}
              />
              <input
                type="text"
                placeholder="Relationship"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('beneficiary4Relationship', e.target.value)}
              />
              <input
                type="number"
                placeholder="Share Percentage"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('beneficiary4Share', e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Governing State (e.g., California)"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('governingState', e.target.value)}
              />
              <textarea
                placeholder="Trust Property Description"
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('trustProperty', e.target.value)}
              />
            </div>
          </div>
        );
      
      case 'llc':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">LLC Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Company Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('companyName', e.target.value)}
              />
              <input
                type="date"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('effectiveDate', e.target.value)}
              />
              <textarea
                placeholder="Business Purpose"
                rows="2"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('businessPurpose', e.target.value)}
              />
              <textarea
                placeholder="Principal Address"
                rows="2"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('principalAddress', e.target.value)}
              />
            </div>
            
            <h4 className="text-md font-semibold text-gray-700">Members</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Member 1 Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('member1Name', e.target.value)}
              />
              <input
                type="number"
                placeholder="Ownership %"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('member1Percentage', e.target.value)}
              />
              <input
                type="number"
                placeholder="Capital Contribution $"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('member1Contribution', e.target.value)}
              />
              <input
                type="text"
                placeholder="Member 2 Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('member2Name', e.target.value)}
              />
              <input
                type="number"
                placeholder="Ownership %"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('member2Percentage', e.target.value)}
              />
              <input
                type="number"
                placeholder="Capital Contribution $"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange('member2Contribution', e.target.value)}
              />
            </div>
            
            <input
              type="text"
              placeholder="Voting Requirement (e.g., majority vote, unanimous consent)"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              onChange={(e) => handleInputChange('votingRequirement', e.target.value)}
            />
          </div>
        );

      // Add similar form fields for other document types...
      default:
        return (
          <div className="text-center text-gray-500 py-8">
            <p>Select a document type to see the input fields</p>
          </div>
        );
    }
  };

  const selectedDocumentType = documentTypes.find(doc => doc.id === selectedDocument);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Legal Document Generator</h1>
          <p className="text-gray-600">Generate professional legal documents instantly</p>
          <p className="text-sm text-gray-500 mt-2">{firmInfo.name} • {firmInfo.phone}</p>
        </div>

        {/* Document Type Selection */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Select Document Type</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {documentTypes.map((docType) => {
              const IconComponent = docType.icon;
              return (
                <button
                  key={docType.id}
                  onClick={() => setSelectedDocument(docType.id)}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 flex flex-col items-center space-y-2 ${
                    selectedDocument === docType.id
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  <IconComponent size={24} />
                  <span className="text-sm font-medium text-center">{docType.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Form Fields */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center space-x-2 mb-4">
            {selectedDocumentType && <selectedDocumentType.icon size={24} className="text-blue-600" />}
            <h2 className="text-2xl font-semibold text-gray-800">
              {selectedDocumentType?.name || 'Document'} Details
            </h2>
          </div>
          {renderFormFields()}
          
          <button
            onClick={generateDocument}
            className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
          >
            Generate Document
          </button>
        </div>

        {/* Generated Document Display */}
        {generatedDocument && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">Generated Document</h2>
              <button
                onClick={() => navigator.clipboard.writeText(generatedDocument)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                Copy to Clipboard
              </button>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
              <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">{generatedDocument}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
