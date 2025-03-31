'use client';

import { useState, useEffect } from 'react';

const FadeInText = ({ text, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return <span className={`fade-in-text ${isVisible ? 'visible' : ''}`}>{text}</span>;
};

export default function PrivacyPolicy() {
  // Add smooth scrolling for mouse wheel

  return (
    <main>
      {/* Hero Section */}
      <section className="hero fade-in">
        <h1>
          <FadeInText text="Gronk End User License Agreement 🌟" />
        </h1>
        <p>
          <FadeInText
            text="Please read this agreement carefully before using the Gronk application. 🚀"
            delay={500}
          />
        </p>
      </section>

      {/* Retro Divider */}
      <div className="retro-divider"></div>

      {/* EULA Section */}
      <section className="about-section fade-in">
        <h2>End User License Agreement</h2>
        <h3>Important – Read Carefully Before Using This Application</h3>
        <p>
          This End User License Agreement ({'"Agreement"'}) is a legal agreement between you (either an individual or a single entity) and E&J Products LLC dba Sundai ({'"Licensor"'}) for the software application named Gronk, including any associated media, printed materials, and electronic documentation (collectively, the {'"Application"'}).
        </p>
        <p>
          By installing, copying, or otherwise using the Application, you agree to be bound by the terms of this Agreement. If you do not agree to the terms of this Agreement, do not install or use the Application.
        </p>

        <h3>1. Grant of License</h3>
        <p>
          Subject to the terms and conditions of this Agreement, Licensor grants you a limited, non-exclusive, non-transferable license to install and use the Application on a device that you own or control.
        </p>

        <h3>2. Subscription Services</h3>
        <p>
          The Application may offer subscription-based services ({'"Subscription Services"'}). The following terms apply to such Subscription Services:
        </p>
        <h4>2.1. Subscription Period</h4>
        <p>
          Subscriptions may be offered on a monthly, quarterly, or annual basis. The specific duration will be disclosed to you before you purchase.
        </p>
        <h4>2.2. Free Trial</h4>
        <p>
          The Application may offer a free trial period. After the trial period ends, your account will automatically be charged according to the subscription plan you selected.
        </p>
        <h4>2.3. Automatic Renewal</h4>
        <p>
          Unless you cancel at least 24 hours before the end of the current period, subscriptions automatically renew for the same duration and at the same price.
        </p>
        <h4>2.4. Cancellation</h4>
        <p>
          You can cancel subscription renewals through your App Store account settings.
        </p>
        <h4>2.5. Price Changes</h4>
        <p>
          Licensor reserves the right to change subscription prices. Any price changes will be communicated to you and will apply to the next subscription period.
        </p>
        <h4>2.6. No Refunds</h4>
        <p>
          Payments for Subscription Services are non-refundable unless required by applicable law.
        </p>

        <h3>3. User Content</h3>
        <h4>3.1. Ownership</h4>
        <p>
          You retain all rights to any content you create, upload, or store within the Application ({'"User Content"'}).
        </p>
        <h4>3.2. License to Licensor</h4>
        <p>
          You grant Licensor a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display your User Content solely for the purpose of providing and improving the Application{'\''}s services to you.
        </p>
        <h4>3.3. Prohibited Content</h4>
        <p>
          You agree not to create or share any User Content that is illegal, infringing, harmful, abusive, racially or ethnically offensive, defamatory, or otherwise objectionable.
        </p>

        <h3>4. Privacy and Data Collection</h3>
        <h4>4.1.</h4>
        <p>
          The Application may collect and use personal information as described in the Privacy Policy, which is incorporated by reference into this Agreement.
        </p>
        <h4>4.2.</h4>
        <p>
          By using the Application, you consent to the collection and use of your information as described in the Privacy Policy.
        </p>

        <h3>5. Intellectual Property Rights</h3>
        <h4>5.1.</h4>
        <p>
          All title, ownership rights, and intellectual property rights in and to the Application and any copies thereof (including but not limited to any images, photographs, animations, video, audio, music, text, and {'"applets"'} incorporated into the Application) are owned by Licensor.
        </p>
        <h4>5.2.</h4>
        <p>
          The Application is protected by copyright laws and international treaty provisions. Accordingly, you must treat the Application like any other copyrighted material.
        </p>

        <h3>6. Restrictions</h3>
        <p>You may not:</p>
        <h4>6.1.</h4>
        <p>Modify, reverse engineer, decompile, or disassemble the Application;</p>
        <h4>6.2.</h4>
        <p>Create derivative works based on the Application;</p>
        <h4>6.3.</h4>
        <p>Copy the Application except as expressly permitted by this Agreement;</p>
        <h4>6.4.</h4>
        <p>Rent, lease, or lend the Application;</p>
        <h4>6.5.</h4>
        <p>Transfer the Application or this Agreement to any third party;</p>
        <h4>6.6.</h4>
        <p>Use the Application to engage in any illegal activity.</p>

        <h3>7. Updates and Maintenance</h3>
        <p>
          Licensor may provide updates, upgrades, or maintenance services for the Application. Such updates may be automatic or may require your consent before installation.
        </p>

        <h3>8. Termination</h3>
        <h4>8.1. By You</h4>
        <p>
          You may terminate this Agreement at any time by uninstalling the Application from your device.
        </p>
        <h4>8.2. By Licensor</h4>
        <p>
          Licensor may terminate this Agreement at any time without notice if you fail to comply with any term of this Agreement.
        </p>
        <h4>8.3. Effect of Termination</h4>
        <p>
          Upon termination, you must cease all use of the Application and destroy all copies of the Application in your possession.
        </p>

        <h3>9. Disclaimer of Warranties</h3>
        <p>
          THE APPLICATION IS PROVIDED {'"AS IS"'} WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. LICENSOR DOES NOT WARRANT THAT THE FUNCTIONS CONTAINED IN THE APPLICATION WILL MEET YOUR REQUIREMENTS OR THAT THE OPERATION OF THE APPLICATION WILL BE UNINTERRUPTED OR ERROR-FREE.
        </p>

        <h3>10. Limitation of Liability</h3>
        <p>
          IN NO EVENT SHALL LICENSOR BE LIABLE FOR ANY SPECIAL, INCIDENTAL, INDIRECT, OR CONSEQUENTIAL DAMAGES WHATSOEVER (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF BUSINESS PROFITS, BUSINESS INTERRUPTION, LOSS OF BUSINESS INFORMATION, OR ANY OTHER PECUNIARY LOSS) ARISING OUT OF THE USE OF OR INABILITY TO USE THE APPLICATION, EVEN IF LICENSOR HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN ANY CASE, LICENSOR{'\''}S ENTIRE LIABILITY UNDER ANY PROVISION OF THIS AGREEMENT SHALL BE LIMITED TO THE AMOUNT ACTUALLY PAID BY YOU FOR THE APPLICATION.
        </p>

        <h3>11. Export Restrictions</h3>
        <p>
          You may not export or re-export the Application except as authorized by United States law and the laws of the jurisdiction in which the Application was obtained.
        </p>

        <h3>12. Governing Law</h3>
        <p>
          This Agreement shall be governed by the laws of the state of Texas, without regard to conflicts of law provisions.
        </p>

        <h3>13. Entire Agreement</h3>
        <p>
          This Agreement constitutes the entire agreement between you and Licensor relating to the Application and supersedes all prior or contemporaneous oral or written communications, proposals, and representations with respect to the Application or any other subject matter covered by this Agreement.
        </p>

        <h3>14. Contact Information</h3>
        <p>
          If you have any questions about this Agreement, please contact:
        </p>
        <p>
          E&J Products LLC dba Sundai<br />
          Email: <a href="mailto:cokeke@sundai.us">cokeke@sundai.us</a>
        </p>
        <p>
          Last Updated: March 28, 2025
        </p>
      </section>

      {/* Retro Divider */}
      <div className="retro-divider"></div>
    </main>
  );
}