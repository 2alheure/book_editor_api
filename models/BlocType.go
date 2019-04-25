package models

type BlocType struct {
	ID				int				`gorm:"primary_key";json:"id,omitempty"`
	Name			string
}