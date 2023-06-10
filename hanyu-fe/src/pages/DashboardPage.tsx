import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAppSelector } from "~/redux/hooks";
import { SalesOverview } from "~/modules/manage/components";
import { Stack } from "@mui/material";


export default function DashboardPage() {
  const auth = useAppSelector((state) => state.auth);
  const profile = useAppSelector((state) => state.profile.user);

  if (!auth.isAuthenticated) {
    toast.error("Bạn cần đăng nhập để truy cập trang này");
    return <Navigate to="/login" replace={true} />;
  }

  if (profile.role !== "ADMIN") {
    toast.error("Bạn không có quyền truy cập trang này");
    return <Navigate to="/" replace={true} />;
  }

  return (
    <Stack>
      <SalesOverview />
    </Stack>
  );
}