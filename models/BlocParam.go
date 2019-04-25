package models

type BlocParam struct {
	ID				int				`gorm:"primary_key";json:"id,omitempty"`
	Name			string
}