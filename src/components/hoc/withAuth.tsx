import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const withAuth = (WrappedComponent: any) => {
  const AuthenticatedComponent = async () => {
    const supabase = createServerActionClient({ cookies });
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) {
      redirect("/login");
    }

    return <WrappedComponent />;
  };
  return AuthenticatedComponent;
};

export default withAuth;
