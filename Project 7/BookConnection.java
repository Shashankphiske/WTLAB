import jakarta.servlet.*;
import java.sql.*;
import java.io.*;
import java.util.*;

public class BookConnection extends HttpServlet{
    public void doPost(HttpServletRequest req, HttpServletResponse res){
        res.setContentType("text/html");
        PrintWriter out = res.getWriter();
        int b_id = Integer.parseInt(req.getParameter("t1"));
        String b_title = req.getParameter("t2");
        String b_author = req.getParameter("t3");
        double b_price = Double.parseDouble(req.getParameter("t4"));
        int b_quantity = req.getParameter("t5");

        try{
            Class.forName("com.mysql.jdbc.Driver");
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/maharashtra", "root", "root");
            PreparedStatement pst = con.prepareStatement("insert into bookshop values(?,?,?,?,?)");
            pst.setInt(1, b_id);
            pst.setString(2, b_title);
            pst.setString(3, b_author);
            pst.setDouble(4, b_price);
            pst.setInt(5, b_quantity);

            int i = pst.executeUpdate();

            if(i == 1){
                out.println("Record inserted successfully");
            }
        }catch(Exception e){
            out.println("Error "+ e);
        }
    }


}