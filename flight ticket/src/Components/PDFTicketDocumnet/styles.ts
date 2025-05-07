import { StyleSheet } from "@react-pdf/renderer";
export const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 30,
  },
  logo: {
    width: 60,
    height: "auto",

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

  divider: {
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    marginTop: 2,
    marginBottom: 12,
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
  barcodeContainer: { marginTop: 5, alignItems: "center" },

  headerLeft: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 4,
    width: "50%",
  },

  headerRight: {
    width: "50%",
    alignItems: "flex-end",
  },

  barcode: {
    width: 180,
    height: 80,
  },
});
