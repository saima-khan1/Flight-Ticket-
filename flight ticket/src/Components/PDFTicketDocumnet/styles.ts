import { StyleSheet } from "@react-pdf/renderer";
export const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  header: {
    fontSize: 14,
    marginBottom: 30,
    fontWeight: "bold",
  },
  logo: {
    width: 60,
    height: "auto",
    marginBottom: 10,
    objectFit: "contain",
  },

  companyInfo: {
    textAlign: "left",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
  },
  centerColumn: {
    flex: 1,
    alignItems: "center",
  },
  routeSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginBottom: 0,
    backgroundColor: "#f2f2f2",
    paddingVertical: 6,
    borderRadius: 4,
  },
  dashedLine: {
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#ccc",
    width: 30,
    height: 0,
    marginHorizontal: 4,
  },

  logo2: {
    width: 20,
    height: 20,
    objectFit: "contain",
    marginHorizontal: 6,
  },
  routeText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  planeIcon: {
    fontSize: 20,
    marginHorizontal: 4,
  },

  divider: {
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    marginTop: 2,
    marginBottom: 12,
  },
  table: {
    width: "100%",
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 5,
    display: "flex",
    justifyContent: "space-between",
  },
  tableCell: {
    width: "25%",
    padding: 5,
    textAlign: "center",
  },
  terms: {
    fontSize: 10,
    marginTop: 20,
    color: "gray",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 30,
    marginTop: 12,
    textTransform: "uppercase",
  },

  infoBlock: {
    marginBottom: 10,
    paddingLeft: 6,
    gap: 4,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  column: {
    width: "32%",
  },
  label: {
    fontWeight: "bold",
    marginBottom: 2,
  },
});
