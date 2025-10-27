"use client";
import { useEffect } from "react";

export default function ContactModal({ isOpen, onClose }) {
  useEffect(() => {
    // Load HubSpot forms script
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "1982228",
          formId: "5e60eb52-8aa5-4c9e-9ea4-57f5d86f3010",
          target: "#hubspot-form",
        });
      }
    });

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Handle body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle overlay click to close
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle escape key to close
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="ReactModal__Overlay ReactModal__Overlay--after-open ModalFadeInCenter-module--modal-overlay--1acde"
      onClick={handleOverlayClick}
    >
      <div 
        className="ReactModal__Content ReactModal__Content--after-open ModalFadeInCenter-module--modal-fade-in-center--1b621 ModalFadeInCenter-module--modal-fade-in--6f7f7"
        tabIndex="-1"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="black-4 ModalFadeInCenter-module--modal-close-cross--eec33 cursor-pointer hover:opacity-70 transition-opacity"
          onClick={onClose}
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>

        {/* Modal Heading */}
        <div className="HubspotModal-module--heading--70962 mb-6">
          <h3 className="title is-3 text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Get in touch
          </h3>
          <div className="content rich-text RichTextField-module--root--6d892 text-gray-700">
            <p className="mb-3">Complete the form and our staff will contact you.</p>
            <p>
              Interested in English teaching jobs?&nbsp;
              <a 
                href="https://www.wallstreetenglish.com/careers/teaching/apply-to-teach/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#de1135] hover:text-[#b30d29] transition-colors font-semibold"
              >
                Apply Here
              </a>
            </p>
          </div>
        </div>

        {/* HubSpot Form */}
        <div className="HubspotModal-module--wrapper--98d4d">
          <div id="hubspot-form"></div>
        </div>
      </div>

      <style jsx>{`

      `}</style>
    </div>
  );
}