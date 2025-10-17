function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        color: "#ffffff",
        textAlign: "center",
        padding: "20px",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Background Elements */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)",
          animation: "float 8s ease-in-out infinite reverse",
        }}
      />

      {/* Main Content Card */}
      <div
        style={{
          backgroundColor: "rgba(15, 23, 42, 0.8)",
          backdropFilter: "blur(20px)",
          padding: "40px 30px",
          borderRadius: "24px",
          boxShadow: `
            0 25px 50px -12px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
          `,
          maxWidth: "500px",
          width: "100%",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          position: "relative",
          zIndex: 10,
          transform: "translateY(0)",
          transition: "all 0.3s ease",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow =
            "0 35px 60px -12px rgba(0, 0, 0, 0.6)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = `
            0 25px 50px -12px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
          `;
        }}
      >
        {/* Animated Icon */}
        <div
          style={{
            width: "70px",
            height: "70px",
            margin: "0 auto 25px",
            background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
            borderRadius: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
            animation: "bounce 2s infinite",
            boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
          }}
        >
          🚀
        </div>

        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 2.5rem)",
            fontWeight: "800",
            background: "linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            marginBottom: "16px",
            letterSpacing: "-0.02em",
            lineHeight: "1.2",
          }}
        >
          Em Construção
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "clamp(1rem, 3vw, 1.1rem)",
            marginBottom: "30px",
            lineHeight: "1.6",
            fontWeight: "400",
          }}
        >
          Estamos construindo algo extraordinário para você.
          <br />
          Novidades incríveis estão a caminho!
        </p>

        {/* Progress Bar */}
        <div
          style={{
            width: "100%",
            height: "6px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
            overflow: "hidden",
            marginBottom: "30px",
            boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.2)",
            position: "relative",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              background: "linear-gradient(90deg, #3b82f6, #06b6d4, #8b5cf6)",
              borderRadius: "8px",
              animation: "smoothProgress 3s infinite ease-in-out",
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
              position: "absolute",
              left: "0",
              top: "0",
            }}
          />
        </div>

        {/* Social Media Icons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/company/grupo-veronez/about/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #0077b5, #00a0dc)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(0, 119, 181, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px) scale(1.1)";
              e.currentTarget.style.boxShadow =
                "0 8px 25px rgba(0, 119, 181, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 15px rgba(0, 119, 181, 0.3)";
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              style={{ transition: "transform 0.3s ease" }}
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/grupoveronez/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "12px",
              background:
                "linear-gradient(135deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(225, 48, 108, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px) scale(1.1)";
              e.currentTarget.style.boxShadow =
                "0 8px 25px rgba(225, 48, 108, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 15px rgba(225, 48, 108, 0.3)";
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              style={{ transition: "transform 0.3s ease" }}
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer
        style={{
          marginTop: "40px",
          color: "#64748b",
          fontSize: "clamp(0.8rem, 2.5vw, 0.9rem)",
          textAlign: "center",
          zIndex: 10,
          padding: "0 20px",
          width: "100%",
          maxWidth: "500px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ marginBottom: "8px" }}>
          © {new Date().getFullYear()} Grupo Veronez. Todos os direitos
          reservados.
        </div>
        <div style={{ fontSize: "clamp(0.7rem, 2.5vw, 0.8rem)", opacity: 0.7 }}>
          A identidade está presente em cada detalhe.
        </div>
      </footer>

      <style>
        {`
          @keyframes smoothProgress {
            0% {
              transform: translateX(-100%);
              opacity: 0.7;
            }
            50% {
              transform: translateX(0%);
              opacity: 1;
            }
            100% {
              transform: translateX(100%);
              opacity: 0.7;
            }
          }
          
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(180deg); }
          }
          
          * {
            box-sizing: border-box;
          }
          
          body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }

          /* Responsive adjustments */
          @media (max-width: 480px) {
            .main-card {
              padding: 30px 20px !important;
              margin: 0 10px !important;
              width: calc(100% - 20px) !important;
            }
            
            .social-icons {
              gap: 15px !important;
            }
            
            .social-icon {
              width: 45px !important;
              height: 45px !important;
            }
          }

          @media (max-width: 768px) {
            .main-card {
              padding: 35px 25px;
              margin: 0 auto;
            }
            
            h1 {
              font-size: 2rem !important;
            }
            
            p {
              font-size: 1rem !important;
            }
          }

          /* Garantir centralização perfeita */
          @media (max-width: 500px) {
            .main-card {
              width: 95% !important;
              margin-left: auto !important;
              margin-right: auto !important;
              padding: 30px 20px !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Home;
