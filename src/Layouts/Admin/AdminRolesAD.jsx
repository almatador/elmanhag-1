import React from 'react'
import { AdminRolesPage } from '../../Pages/AllPages'
import TitleHeader from '../../Components/TitleHeader'

const AdminRoles = () => {
       return (
              <>
                     <div className="flex flex-col items-center h-full gap-y-4">
                            <TitleHeader text={"Admin Roles"} spaceBottom={3} />
                            <AdminRolesPage />
                     </div>
              </>
       )
}

export default AdminRoles