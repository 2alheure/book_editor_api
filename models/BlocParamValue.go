package models

type BlocParamValue struct {
	ID				int				`gorm:"primary_key";json:"id,omitempty"`
	Param			BlocParam		`gorm:"foreignkey:BlocParamID"`
	BlocParamID		int				// FOREIGN KEY
	Value			string			`gorm:"binary"`
}