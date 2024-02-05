import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button.tsx";
import { FORM_ROUTES } from "@/routes/form-routes.ts";
import { useEffect } from "react";

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "ERAP Service";
  }, []);

  return (
    <div className="bg-blue-400 w-full h-screen flex items-center justify-center">
      <Button onClick={() => navigate(FORM_ROUTES.index)}>Go to Form</Button>
    </div>
  );
}

export default HomePage;
